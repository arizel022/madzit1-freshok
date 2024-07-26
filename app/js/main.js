$(function () {

    $(document).ready(function () {
        $('.selectBtn').click(function (evenet) {
            $('.dropdown').toggleClass('active')
        });
    });
});


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


$('.card__btn--minus').click(function () {
    var $input = $(this).parent().parent().find('.card__form-input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.card__btn--plus').click(function () {
    var $input = $(this).parent().parent().find('.card__form-input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});
