function initCarousel() {
  // ваш код...

  let arrowRight = document.querySelector('.carousel__arrow_right')
  let arrowLeft = document.querySelector('.carousel__arrow_left')
  let carousel = document.querySelector('.carousel__inner')
  let carouselWidth = carousel.offsetWidth
  let startPosition = 0

  arrowLeft.style.display = 'none'

  arrowLeft.onclick = function () {
    arrowRight.style.display = ''
    startPosition += carouselWidth
    carousel.style.transform = `translateX(${startPosition}px)`
    if (startPosition == 0) {
      arrowLeft.style.display = 'none';
    }
  }

  arrowRight.onclick = function () {
    arrowLeft.style.display = ''
    startPosition -= carouselWidth
    carousel.style.transform = `translateX(${startPosition}px)`
    if (startPosition < -2 * carouselWidth) {
      arrowRight.style.display = 'none';
    }
  }
}
