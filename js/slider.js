let slideIndex = 1;
const sliderButtons = document.querySelectorAll('.switcher-button');
const slides = document.querySelectorAll('.slider-item');
const body = document.body;

function onButtonClick(evt) {
  const target = evt.target;
  const slideNumber = Number(target.dataset.slide);

    if (slideNumber != slideIndex) {
        sliderButtons[slideIndex - 1].classList.remove('switcher-button-current');
        sliderButtons[slideNumber - 1].classList.add('switcher-button-current');
        slides[slideIndex - 1].classList.remove('slide-current');
        slides[slideNumber - 1].classList.add('slide-current');
        body.classList.replace('page-body-bg-' + slideIndex, 'page-body-bg-' + slideNumber);
        slideIndex = slideNumber
    }
}

if (sliderButtons) {
  sliderButtons.forEach( (button) => button.addEventListener( 'click', onButtonClick));
}
