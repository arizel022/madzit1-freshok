$(function () {

    $(document).ready(function () {
        $('.selectBtn').click(function (evenet) {
            $('.main-menu').toggleClass('active')
        });
    });

    $(document).ready(function () {
        $('.searchBtn').click(function (evenet) {
            $('.menu-header__form').toggleClass('active')
        });
    });

    $(document).ready(function () {
        $('.burger-button').click(function (evenet) {
            $('.backdrop-mobile').addClass('active')
            $('.body').addClass('lock')
        });
    });

    $(document).ready(function () {
        $('.close-button').click(function (evenet) {
            $('.backdrop-mobile').removeClass('active')
            $('.body').removeClass('lock')
        });
    });


 });

var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
  controls: {
    scope: 'local'
  }
};

var mixer1 = mixitup(containerEl1, config);
var mixer2 = mixitup(containerEl2, config);

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-basket-open]"),
        closeModalBtn: document.querySelector("[data-basket-close]"),
        modalBodyBtn: document.querySelector("[data-lock]"),
        modal: document.querySelector("[data-basket]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);


    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        refs.modalBodyBtn.classList.toggle("lock");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-basket-mobile-open]"),
        closeModalBtn: document.querySelector("[data-basket-mobile-close]"),
        modalBodyBtn: document.querySelector("[data-lock]"),
        modal: document.querySelector("[data-basket-mobile]"),
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



