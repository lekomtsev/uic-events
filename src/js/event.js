import { accordion, initArchiveSlider } from './functions';


/***
 *
 * @type {NodeListOf<Element>}
 * Аккардеон на странице события
 */

let speakersAll = document.querySelectorAll('.event-speakers .speaker');

accordion(speakersAll, 'speaker--active', false);

/***
 * Слайдер на странице Архивы
 */

initArchiveSlider();


window.addEventListener('resize', () => {

  initArchiveSlider();

});

/*let archiveEvent = new Swiper('.archive-event .swiper-container', {
  slidesPerView: 12,
  allowSlidePrev: false,
  allowSlideNext: false,
  keyboard: false,
  noSwiping: false,
  simulateTouch: false,
  breakpoints: {
    992: {
      slidesPerView: 9,
      freeMode: true,
      speed: 600,
      allowSlidePrev: true,
      allowSlideNext: true,
      keyboard: true,
      noSwiping: true,
      simulateTouch: true
    },
    480: {
      slidesPerView: 4
    }
  }
});*/
