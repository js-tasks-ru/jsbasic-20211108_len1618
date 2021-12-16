export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.seg = steps - 1;
    this.createElem();
    this.createSpan(steps);
    this.spanActive()
    this.onclick(steps);
  }

  createElem() {
    this.elem = document.createElement('div');
    this.elem.classList.add('slider');
    this.elem.innerHTML = `
    <div class="slider__thumb">
      <span class="slider__value">0</span>
    </div>
    <div class="slider__progress"></div>
    <div class="slider__steps">
    </div>`;
  }

  createSpan(steps) {
    let stepSpan = this.elem.querySelector('.slider__steps')

    for (let i = 0; i < steps; i++) {
      let span = document.createElement('span')
      stepSpan.appendChild(span)
      
    }
  }

  spanActive() {
    let firstActive = this.elem.querySelector('.slider__steps span:first-child')
    firstActive.classList.add('slider__step-active')
  }

  onclick(steps) {
    this.elem.addEventListener('click', () => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;

      let span = this.elem.querySelectorAll('.slider__steps span')
      let sliderValue = this.elem.querySelector('.slider__value')
      let spanActive = this.elem.querySelector(`.slider__steps span:nth-child(${value})`)
      
      span.forEach(item => {
        item.classList.remove('slider__step-active')
      });
      
      spanActive.classList.add('slider__step-active')
      sliderValue.innerHTML = value

      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');

      let leftPercents = valuePercents;

      thumb.style.left = `${leftPercents}%`;
      progress.style.width = `${leftPercents}%`;

    });

  }

  changeValue(event) {
    let sliderValue = this.elem.querySelector('.slider__value');
    let sliderCoordinates = event.target.getBoundingClientRect();
    let newValue = Math.round((event.clientX - sliderCoordinates.left) / (this.elem.offsetWidth / this.seg));
    sliderValue.innerHTML = newValue;

    this.moveSlider(newValue);

    this.elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: newValue,
      bubbles: true
    }));

  }

}
