(function () {
  var map,
      img = '../img/map-pin.png',
      popupContent = '<p class="contacts__popup-content">Работаем круглосуточно!</p>',
      coordinates = {lat: 55.748116, lng: 37.570913};

  window.initMap = function () {

    map = new google.maps.Map(document.querySelector('.contacts__map'), {
      center: coordinates,
      zoom: 17,
      scrollwheel: false,
      mapTypeId: 'roadmap',
    });

    var icon = {
      url: img,
      scaledSize: new google.maps.Size(50,70)
    };

    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      icon: icon,
    });
  }
})();
