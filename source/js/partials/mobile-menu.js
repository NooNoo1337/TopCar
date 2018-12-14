var hamburger_button = $('.header__menu-button'),
    mobile_menu      = document.querySelector('.mobile-menu'),
    mobile_menu_nav  = $('.mobile-menu__nav'),
    content_wrapper  =  $('.content-wrapper');


hamburger_button.click(function () {

  if ( !content_wrapper.hasClass('menu-is-opened') ) {

    mobile_menu_nav.delay(0).animate({
      opacity: '1',
    }, 100, function () {
      $(this).css('transform', 'translate3d(0, 0, 0)' );
    });

  } else {

    mobile_menu_nav.delay(260).animate({
    }, 400, 'linear', function () {
      $(this).css('transform', 'translate3d(-100%, 0, 0)' );
    });

  }

  $('.header').toggleClass('menu-is-opened');
  content_wrapper.toggleClass('menu-is-opened');
  hamburger_button.toggleClass('header__menu-button--cross');
});

$('.mobile-menu__link--offers').on('click', function () {
  $(this).next().toggleClass('list-opened');
  $(this).find('.mobile-menu__arrow-icon').toggleClass('reversed');
});