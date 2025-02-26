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

    $(document).ready(function () {
        $('.selectBtnName').click(function (evenet) {
            $('.dropdownName').toggleClass('active')
        });
    });

    $(document).ready(function () {
        $('.selectBtnNumbers').click(function (evenet) {
            $('.dropdownNumbers').toggleClass('active')
        });
    });

    $('.catalog__btn').on('click', function () {
        $('.catalog__btn').removeClass('catalog__btn--active');
        $(this).addClass('catalog__btn--active');
    });

    $('.switchAppearanceCatalogRow').on('click', function () {
        $('.product-card').addClass('product-card--row');
        $('.grid').addClass('grid--2fr');
        $('.grid').removeClass('grid--3fr');
    });

    $('.switchAppearanceCatalogGrid').on('click', function () {
        $('.product-card').removeClass('product-card--row');
        $('.grid').addClass('grid--3fr');
        $('.grid').removeClass('grid--2fr');
    });

    $(document).ready(function () {
        $('.btnCatalog').click(function (evenet) {
            $('.catalog').addClass('active')
            $('.catalog__aside').addClass('active')
            $('body').addClass('lock')
        });
    });

    $(document).ready(function () {
        $('.closeBtnFilter').click(function (evenet) {
            $('.catalog').removeClass('active')
            $('.catalog__aside').removeClass('active')
            $('body').removeClass('lock')
        });
    });

    $(document).ready(function () {
        $('.zoomBtn').click(function (evenet) {
            $('.product').addClass('active')
            $('.product__gallery').addClass('active')
            $('body').addClass('lock')
        });
    });

    $(document).ready(function () {
        $('.closeBtnZoom').click(function (evenet) {
            $('.product').removeClass('active')
            $('.product__gallery').removeClass('active')
            $('body').removeClass('lock')
        });
    });

    $('.product__tabs-btn').on('click', function (e) {
        e.preventDefault();
        $('.active').removeClass('active');
        $(this).addClass('active');

        $('.product__content-item').removeClass('active');
        $($(this).attr('id')).addClass('active');
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


$('.counter-form__btn--minus').click(function () {
    var $input = $(this).parent().parent().find('.counter-form__input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});

$('.counter-form__btn--plus').click(function () {
    var $input = $(this).parent().parent().find('.counter-form__input');
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

if ($('.mixerContainer').length) {
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
}

var $range = $(".rangeslider-form__input--slide");
var $inputFrom = $(".rangeslider-form__input--from");
var $inputTo = $(".rangeslider-form__input--to");
var instance;
var min = 0;
var max = 1000;
var from = 0;
var to = 0;

$range.ionRangeSlider({
    skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 100,
    to: 2000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);
}

$inputFrom.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }

    instance.update({
        from: val
    });

    $(this).prop("value", val);

});

$inputTo.on("change", function () {
    var val = $(this).prop("value");

    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }

    instance.update({
        to: val
    });

    $(this).prop("value", val);
});

$(document).ready(function () {
    let btnCatalog = $('.btnCatalog'); // Кнопка для открытия меню
    let catalogAside = $('.catalog__aside'); // Боковое меню
    let section = $('.catalog'); // Секция с псевдоэлементом затемнения
    let body = $('body'); // Тело страницы

    function handleMenuLogic() {
        // Проверка ширины экрана
        if ($(window).width() < 1200) {
            // Обработчик клика на кнопку для открытия меню
            btnCatalog.on('click', function () {
                catalogAside.fadeIn(); // Показываем меню
                section.addClass('active'); // Добавляем класс active для затемнения
                body.addClass('lock'); // Добавляем класс lock к body
            });

            // Обработчик клика вне меню или кнопки
            $(document).mouseup(function (e) {
                if (!catalogAside.is(e.target) && catalogAside.has(e.target).length === 0 &&
                    !btnCatalog.is(e.target) && btnCatalog.has(e.target).length === 0) {
                    catalogAside.fadeOut(); // Скрываем меню
                    section.removeClass('active'); // Убираем затемнение
                    body.removeClass('lock'); // Убираем класс lock у body
                }
            });
        } else {
            // Убираем все классы и показываем меню на больших экранах
            catalogAside.show(); // Меню всегда видно
            section.removeClass('active'); // Убираем затемнение
            body.removeClass('lock'); // Убираем класс у body
        }
    }

    // Вызываем функцию при загрузке
    handleMenuLogic();

    // Перепроверяем при изменении размера окна
    $(window).resize(function () {
        handleMenuLogic();
    });
});
