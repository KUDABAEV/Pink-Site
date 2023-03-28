$(document).ready(function (){

    $('.reviews__slider').slick({
        responsive: [
            {
                breakpoint: 1199,

                settings: {
                    dots: true,
                    arrows: false,
                }
            },
        ]
    });

    $('.prices__slider').slick({
        responsive: [
            {
                breakpoint: 500,

                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });


});


const hamburger = document.querySelector('.header__hamburger');
const menu = document.querySelector('.header__top');
const body = document.querySelector('body');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});