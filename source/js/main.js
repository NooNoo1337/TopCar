document.body.onload = function() {

  setTimeout(function () {
    var preloader = document.querySelector('.preloader');

    if ( !preloader.classList.contains('page-loaded') ) {
      preloader.classList.add('page-loaded')
    }
  }, 1000);
};


//= partials/mobile-menu.js

//= partials/scroll-to-element.js

//= partials/render_table_rows.js

svg4everybody();


$('.header__item--drop').on('click', function () {
  $(this).find('.header__drop-block').toggleClass('drop-list-opened');
});


