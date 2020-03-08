$(document).on('ready', function() {
    $('.slider-box').owlCarousel({
        loop:true,
        items:1,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $('.idea-box').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000
    });

    $(window).on('load resize', function(){
        if ($(this).width() < 1024) {
            $('nav').addClass('media-nav');
        } else {
            $('nav').removeClass('media-nav');
        }
    });

    $('.facebook-box__image').on('click', function(){
        var $facebook_box = $('.facebook-box');
        if (!$facebook_box.hasClass('active')) {
            $facebook_box.addClass('active').animate({
                left: 0,
            }, 300);
        } else {
            $facebook_box.removeClass('active').animate({
                left: -360,
            }, 300);
        }
        
    })

});