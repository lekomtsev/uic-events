import './vendor/swiper';
import './vendor/circletype.min';

import 'lightgallery.js';

import { accordion, masonry } from "./functions";

/**
 * С помощью плагина CircleType.js загибаем
 * слова дугой
 * */
let numbersItemText = document.querySelectorAll('.numbers__item-text');

[...numbersItemText].forEach((item) => {
  new CircleType(item)
    .dir(-1)
    .radius(102);
});

/**
 *
 * @type {NodeListOf<Element>}
 * Аккардеон на главной странице
 */

let membersTitle = document.querySelectorAll('.members__title');

accordion(membersTitle, 'members--active');

/**
 *
 * @type {Element}
 * Masonry на главной странице
 */

let cardWrapper = document.querySelector('.card-wrapper');

masonry(cardWrapper, '.card');

/**
 * Light gallery
 */

let cardGallery = document.querySelectorAll('.card__gallery');

[...cardGallery].forEach((item) => {
  lightGallery(item, {
    thumbnail: false
  });
});

/**
 * Слайдер в секции guest
 */

let sliderGuest = new Swiper('.guests .swiper-container', {
  slidesPerView: 6,
  freeMode: true,
  speed: 600,
  loop: true,
  /* autoplay: {
     delay: 5000,
   },*/
  breakpoints: {
    1200: {
      slidesPerView: 5
    },
    992: {
      slidesPerView: 3
    },
    520: {
      slidesPerView: 2
    }
  }
});
