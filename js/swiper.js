const swiper = new Swiper('.procedures__swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    767: {
      slidesPerView: 2,

    },
    // when window width is >= 480px
    991: {
      slidesPerView: 3,

    },
  },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-procedures__button.slider-procedures__button--next',
    prevEl: '.slider-procedures__button.slider-procedures__button--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});