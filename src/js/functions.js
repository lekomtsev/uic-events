import imagesLoaded from 'imagesloaded';
import Masonry from 'masonry-layout';

/**
 *
 * @returns {boolean}
 */

function isAdaptive() {
  if (typeof window.matchMedia !== 'function') {
    return false;
  }

  return window.matchMedia('screen and (max-width: 992px)').matches;
}

/**
 *
 * @param element
 * @param itemClassActive
 */

function accordion (element, itemClassActive, hasParent = true) {
  [...element].forEach((item) => {
    item.addEventListener('click', () => {
      if (!hasParent) {
        item.classList.toggle(itemClassActive);
        return;
      }

      item.parentNode.classList.toggle(itemClassActive);
    });
  });
}

/**
 *
 * @param itemWrapper
 * @param itemSelector
 */

function masonry(itemWrapper, itemSelector) {

  imagesLoaded(itemWrapper, () => {

    let msnry = new Masonry(itemWrapper, {
      itemSelector: itemSelector,
      horizontalOrder: true
    });

    function onLayout(laidOutItems) {
      [...laidOutItems].forEach((item, index) => {
        // item.element.classList.remove('card--left');
        if (item.position.x === 0) {
          // item.element.classList.add('card--left');
        }
      });
    }

    msnry.on( 'layoutComplete', onLayout );
  });
}


let archiveSlider = undefined;

function initArchiveSlider() {

  if (isAdaptive() && archiveSlider === undefined) {
    archiveSlider = new Swiper('.history .swiper-container', {
      slidesPerView: 9,
      freeMode: true,
      speed: 600,
      noSwiping: true,
      swiping: true,
      breakpoints: {
        992: {
          slidesPerView: 8,
          freeMode: true,
          speed: 600,
          navigation: {
            nextEl: '.history__arrow--next',
            prevEl: '.history__arrow--prev',
          },
        },
        480: {
          slidesPerView: 4
        }
      }
    });
  } else if (!isAdaptive() && archiveSlider !== undefined) {
    archiveSlider.destroy();
    archiveSlider = undefined;
  }
}

/**
 * Управление меню, если режим mode === false функция закрывает меню в ручном режиме
 * @param mode
 */
function mobileMenuTrigger(mode = true) {
  let header = document.querySelector('.header');

  if (mode) {
    header.classList.toggle('is-mobile');
    document.body.classList.toggle('no-scroll');
  } else {
    header.classList.remove('is-mobile');
    document.body.classList.remove('no-scroll');
  }
}

export { accordion, isAdaptive, masonry, initArchiveSlider, mobileMenuTrigger };
