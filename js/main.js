$(document).ready(function () {

    // Sliders

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1506,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });


    
    $('.slider__why').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    })


    $('.slider__video').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay:true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1510,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }

        ]
    })

    // slider__gallery

    $('.slider__gallery').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay:true,
        autoplaySpeed: 3000,
        // responsive: [
        //     {
        //         breakpoint: 1510,
        //         settings: {
        //             slidesToShow: 1,
        //             arrows: false
        //         }
        //     }

        // ]
    })

    // Burger__menu

const hamburger__lines = document.querySelector('.hamburger__lines');
const burgerMenu = document.querySelector('.burger__menu');
hamburger__lines.addEventListener('click', function(e) {
    e.preventDefault();
    burgerMenu.classList.toggle('menu__open');
    hamburger__lines.classList.toggle('lines__rotate')
})

});

//Tabs

$(document).ready(function () {
    $('.block__title').click(function (event) {
        if ($('.inner__block').hasClass('one')) {
            $('.block__text').not($(this).next()).slideUp(300);
            $(this).toggleClass('active');
            $('.block__title').not($(this)).removeClass('active');
            $(this).toggleClass('active--bg');
            $('.block__title').not($(this)).removeClass('active--bg');

        }

        $(this).next().slideToggle(300);
    });
});
