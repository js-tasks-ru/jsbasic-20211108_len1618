import createElement from '../../assets/lib/create-element.js';


export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.createElem(categories);
    this.onClick();
    this.scroll();
    this.linkClick();
  }

  createElem(categories) {
    this.elem = document.createElement('div');
    this.elem.classList.add('ribbon');
    this.elem.innerHTML = `
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">
      ${categories.map(category => `
      <a href="#" class="ribbon__item" data-id="${category.id}">
        ${category.name}
      </a>`).join('')}
    </nav>
    <button class="ribbon__arrow ribbon__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>`;
  }

  scroll() {
      let arrowLeft = this.elem.querySelector('.ribbon__arrow_left')
      let arrowRight = this.elem.querySelector('.ribbon__arrow_right')
      const scrollContainer = this.elem.querySelector('.ribbon__inner');
    scrollContainer.addEventListener('scroll', function() {
      let scrollWidth = scrollContainer.scrollWidth;
      let scrollLeft = scrollContainer.scrollLeft;
      let clientWidth = scrollContainer.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      if (scrollContainer.scrollLeft === 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible');
      } else {
        arrowLeft.classList.add('ribbon__arrow_visible');
      }
      if (scrollRight === 0) {
        arrowRight.classList.remove('ribbon__arrow_visible');
      } else {
        arrowRight.classList.add('ribbon__arrow_visible');
      }
    });
  }



  onClick() {
    let arrowLeft = this.elem.querySelector('.ribbon__arrow_left')
    let arrowRight = this.elem.querySelector('.ribbon__arrow_right')
    arrowLeft.classList.remove('ribbon__arrow_visible');
    arrowRight.classList.add('ribbon__arrow_visible');

    arrowRight.addEventListener('click', () => {
      let ribbonInner = this.elem.querySelector('.ribbon__inner')
      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;
      let scrollRight = scrollWidth - scrollLeft - clientWidth;

      ribbonInner.scrollBy(350, 0);

      if (scrollRight == 0) {
        arrowRight.classList.remove('ribbon__arrow_visible')
      }
    });

    arrowLeft.addEventListener('click', event => {
      let ribbonInner = this.elem.querySelector('.ribbon__inner')
      let scrollLeft = ribbonInner.scrollLeft;

      ribbonInner.scrollBy(-350, 0);
      if (scrollLeft == 0) {
        arrowLeft.classList.remove('ribbon__arrow_visible')
      }
    });

  }


  linkClick() {
    let ribbonInner = this.elem.querySelector('.ribbon__inner')
    const ribbonMenuItems = Array.from(ribbonInner.querySelectorAll('.ribbon__item'));
    ribbonMenuItems.forEach((item)=> {
      
      item.addEventListener('click', (event)=> {
        ribbonMenuItems.forEach((item)=> {
          item.classList.remove('ribbon__item_active');
        });
        
        let target = event.target;

        event.preventDefault();

        target.classList.add('ribbon__item_active');

        this.ribbonMenuItemClick(target);
      });
      
    });

    return ribbonInner;

  }

  ribbonMenuItemClick = (target) => {
    const ribbonMenuItemEvent = new CustomEvent("ribbon-select", 
      { detail: target.getAttribute('data-id'),
        bubbles: true});

    return this.elem.dispatchEvent(ribbonMenuItemEvent);
     
  }
  
}

