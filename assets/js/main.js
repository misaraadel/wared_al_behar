$(document).ready(function () {
    /*start the loading page */
    $(window).on("load", function () {
        $(".loading-page")
            .fadeOut(2000, function () {
                $("body").css("overflow", "auto");
                $("this").fadeOut(1500, function () {
                    $(this).remove();
                });
            });
    });
    //change navbar color on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    //smooth_scroll
    //scroll to top
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }

    });
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
    //gallary image 
    $('.owl-gallary-image').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        smartSpeed: 4000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });
    //owl-partner
    $('.owl-partner').owlCarousel({
        rtl: true,
        loop: true,
        margin: 10,
        nav: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 5
            }
        }
    });
    //Wow intit
    wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    $('.name').click(function () {
        $('.name').addClass('shadow-shape ');
        $('.mail').removeClass('shadow-shape ');
        $('.message').removeClass('shadow-shape ');
    });
    $('.mail').click(function () {
        $('.mail').addClass('shadow-shape ');
        $('.name').removeClass('shadow-shape ');
        $('.message').removeClass('shadow-shape ');
    });
    $('.message').click(function () {
        $('.message').addClass('shadow-shape ');
        $('.name').removeClass('shadow-shape ');
        $('.mail').removeClass('shadow-shape ');
    });
});