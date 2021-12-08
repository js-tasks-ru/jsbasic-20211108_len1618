import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.createElem(slides)
    this.createArrows();
    this.initCarousel(slides);
  }

  createElem(slides) {
    this.elem = createElement(`
    <div class='carousel'>
      <div class='carousel__inner'>
          ${slides.map(slide => `
          <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${(slide.price).toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`).join('')}
      </div>
    </div>`)
  }

  createArrows() {
    let arrows = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
    `;
    this.elem.insertAdjacentHTML("afterbegin", arrows);
  }

  initCarousel(slides) {
    let arrowRight = this.elem.querySelector('.carousel__arrow_right')
    let arrowLeft = this.elem.querySelector('.carousel__arrow_left')
    let carousel = this.elem.querySelector('.carousel__inner')
    let carouselWidth = carousel.offsetWidth
    let startPosition = 0


    arrowLeft.style.display = "none";

    this.elem.addEventListener("click", (event)=> {
      if (event.target.closest('.carousel__arrow_right')) {
        startPosition -= carousel.offsetWidth;
      } else if (event.target.closest('.carousel__arrow_left')) {
        startPosition += carousel.offsetWidth;
      } 
      else if (event.target.closest(".carousel__button")) {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
          detail: event.target.closest(".carousel__slide").dataset.id,
          bubbles: true
        }));
      }
      carousel.style.transform = 'translateX(' + startPosition + 'px)';
  
      if (startPosition == carouselWidth * -1 * (slides.length - 1)) {
        arrowRight.style.display = "none";
      } else if (startPosition == 0) {
        arrowLeft.style.display = "none";
      } else {
        arrowLeft.style.display = "";
        arrowRight.style.display = "none";
      }
    });
  }

  
}







