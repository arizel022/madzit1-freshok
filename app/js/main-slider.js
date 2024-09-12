const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    
    navigation: {
      nextEl: '.hero__swiper-btn--next',
      prevEl: '.hero__swiper-btn--prev',
    },
  });


  var swiper2 = new Swiper(".mySwiper2",{
    slidesPerView: 6,
    
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
  });
 