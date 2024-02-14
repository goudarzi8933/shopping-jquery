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








});