
$(function () {

    $(document).ready(function () {
        $('.selectBtn').click(function (evenet) {
            $('.main-menu').toggleClass('active')
        });
    });
});

var mixer = mixitup('.grid');


(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modalBodyBtn: document.querySelector("[data-lock]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);


    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        refs.modalBodyBtn.classList.toggle("lock");
    }
})();


$('.counter__btn--minus').click(function () {
    var $input = $(this).parent().parent().find('.counter__form-input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.counter__btn--plus').click(function () {
    var $input = $(this).parent().parent().find('.counter__form-input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

// var swiper = new Swiper(".hero__swiper-wrapper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
  
//     navigation: {
//       nextEl: ".hero__swiper-btn--next",
//       prevEl: ".hero__swiper-btn--prev",
//     },
//   });

// import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    
    navigation: {
      nextEl: '.hero__swiper-btn--next',
      prevEl: '.hero__swiper-btn--prev',
    },
  });

