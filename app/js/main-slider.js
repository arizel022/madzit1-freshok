const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
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
 