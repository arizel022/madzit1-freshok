const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: '.hero__swiper-btn--next',
      prevEl: '.hero__swiper-btn--prev',
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });

var swiper2 = new Swiper(".mySwiper2",{
    slidesPerView: 6,
    
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    
  });


const swiper3 = new Swiper('.mySwiper3', {
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: '.product__gallery-btn--next',
      prevEl: '.product__gallery-btn--prev',
    },

    pagination: {
      el: ".product__gallery-pagination",
      clickable: true,
    },
 

});

const swiper4 = new Swiper('.mySwiper4', {
  slidesPerView: 2,
  spaceBetween: 5,

  navigation: {
    nextEl: '.offers__btn--next',
    prevEl: '.offers__btn--prev',
  },

  breakpoints: {
    550: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    1200: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: ".offers__swiper-pagination",
    clickable: true,
  },
});
 
