import './vendor';
import './index';
import './event';

import { mobileMenuTrigger } from "./functions";

/**
 * Мобильное меню
 * @type {Element}
 */

let hamburger = document.querySelector('.hamburger');
let menuClose = document.querySelector('.menu__close');

hamburger.addEventListener('click', evt => mobileMenuTrigger() );

menuClose.addEventListener('click', evt => mobileMenuTrigger(false) );

window.addEventListener('resize', () => {
  mobileMenuTrigger(false);
});











