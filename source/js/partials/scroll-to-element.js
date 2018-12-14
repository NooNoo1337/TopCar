// scroll to element
$(document).ready(function () {
  $('.scroll-link').click(function () {
    var elementClick = $(this).attr('href');
    var destination = $(elementClick).offset().top;

    var hamburger_button = $('.header__menu-button'),
        mobile_menu_nav  = $('.mobile-menu__nav'),
        content_wrapper  =  $('.content-wrapper');

    if ( $(window).width() < 1024 ) {
      $('.header').removeClass('menu-is-opened');
      $('.header__menu-button').removeClass('header__menu-button--cross');

      $('.content-wrapper').removeClass('menu-is-opened');

      mobile_menu_nav.delay(260).animate({
      }, 400, 'linear', function () {
        $(this).css('transform', 'translate3d(-100%, 0, 0)' );
      });

      $('.header').removeClass('menu-is-opened');
      content_wrapper.removeClass('menu-is-opened');
      hamburger_button.removeClass('header__menu-button--cross');

      $('html, body').animate({ scrollTop: destination - 0}, 300);


    } else {
      $('html, body').animate({ scrollTop: destination - 0}, 300);
    }

    return false;
  });

});