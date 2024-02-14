$(document).ready(function () {

    // preloader
    $(window).on('load', function () {
        $('.preloader').addClass('complete');
    })

    /*--For-make-Menu-responsive------------*/
    $('.toggle').click(function () {
        $('.toggle').toggleClass('active')
        $('.navigation').toggleClass('active')
    })

    /*-----For Search Bar-----------------------------*/
    $('.search').on('click', function () {
        $('.search-bar').addClass('search-bar-active')
    });

    $('.search-cancel').on('click', function () {
        $('.search-bar').removeClass('search-bar-active')
    });

    /*---For Login and Sign-up----------------------------*/
    $('.user,.already-account').on('click', function () {
        $('.form').addClass('login-active').removeClass('sign-up-active')
    });

    $('.sign-up-btn').on('click', function () {
        $('.form').addClass('sign-up-active').removeClass('login-active')
    });

    $('.form-cancel').on('click', function () {
        $('.form').removeClass('login-active').removeClass('sign-up-active')
    });



    // scroll
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        console.log(scroll);
        if (scroll >= 50) {
            $('.sticky').addClass('stickyadd');
        } else {
            $('.sticky').removeClass('stickyadd');
        }
    });

    var $child = $('.way-fade-up').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animated fadeInUp');
        }, { offset: '90%' });
    });

    var $child = $('.way-fade-left').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animated fadeInLeft');
        }, { offset: '90%' });
    });

    var $child = $('.way-fade-right').children();
    $child.each(function () {
        var self = $(this);
        $(this).waypoint(function () {
            self.addClass('animated fadeInRight');
        }, { offset: '90%' });
    });

    // type animated
    var typed = new Typed(".element", {
        strings: ["easy", "High quality", "BUY"],
        smartBackspace: true,
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    // progress bars

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll('.progress-bar');

            p[0].setAttribute('style', 'width:100%;transition:all 1s;');
            p[1].setAttribute('style', 'width:100%;transition:all 1.5s;');
            p[2].setAttribute('style', 'width:100%;transition:all 1.7s;');
            p[3].setAttribute('style', 'width:100%;transition:all 2s;');
            p[4].setAttribute('style', 'width:100%;transition:all 2.3s;');
        },
        offset: '100%'
    });

    // filter work
    var filterizd = $('.filter-container').filterizr({
        animationDuration: .5,
        // layout: 'horizontal',
    });



    // owl carousel
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        animateIn: "fadeInRight"
    });

    $('a').smoothScroll({
        speed: 1000,
    });

});