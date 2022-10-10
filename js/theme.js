$(document).ready(function () {
    'use strict'

    function wowInit() {
        let scrollingAnimations = false
        if (scrollingAnimations) {
            $(window).on('load'), () => {
                setTimeout(() => {
                    new WOW.init()
                }, 400);
            }
        }
    }
    wowInit()

    //mobile-menu
    $('.mobile-btn, .close-mob-menu').on('click', () => $('.mob-menu-wrapper').toggleClass('active'))
    $('.mobile-menu ul li a').on('click', () => $('.mob-menu-wrapper').removeClass('active'))

    $('.main-menu ul li a[href*="#"], .mobile-menu ul li a[href*="#"]').on('click', function (e) {
        e.preventDefault()
        let anchor = $(this)
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000)
    })

    $('.js-contact-modal').on('click', (e) => {
        e.preventDefault()
        $('.modal').addClass('show')
        $('.modal').on('click', () => $('.modal').removeClass('show'))
        $('#back-to-cv').on('click', () => $('.modal').removeClass('show'))
        $('.modalContent').on('click', (e) => e.stopPropagation())
    })

})