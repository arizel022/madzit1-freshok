$(function () {

    $(document).ready(function () {
        $('.selectBtn').click(function (evenet) {
            $('.main-menu').toggleClass('active')
        });
    });

    $(document).ready(function () {
        $('.searchBtn').click(function (evenet) {
            $('.form-search').toggleClass('active')
        });
    });
});

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
        openModalBtn: document.querySelector("[data-mobile-menu-open]"),
        closeModalBtn: document.querySelector("[data-mobile-menu-close]"),
        modalBodyBtn: document.querySelector("[data-lock]"),
        modal: document.querySelector("[data-mobile-menu]"),
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

var containerEl1 = document.querySelector('[data-ref="container-1"]');
var containerEl2 = document.querySelector('[data-ref="container-2"]');

var config = {
    controls: {
        scope: 'local'
    }
};

if ($('.mixerContainer').length){
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
}










