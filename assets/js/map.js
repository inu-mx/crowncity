var map;
function initMap() {
  var carmen = {lat: 18.6525473, lng: -91.8149856};
  var campeche = {lat: 19.855165, lng: -90.527795};
  var coatza = {lat: 18.145147, lng: -94.4281916};
  var juarez = {lat: 31.6987674, lng: -106.4112108};
  var merida = {lat: 21.0175579, lng: -89.6062588};
  var navojoa = {lat: 27.0843706, lng: -109.4560122};
  var villahermosa = {lat: 18.0019428, lng: -92.9467854};
  var crown = {lat: 24.6944808, lng: -101.6182094};
  map = new google.maps.Map(document.getElementById('map'), {
    center: crown,
    zoom: 5.4,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: false,
    gestureHandling: 'none',
    styles: [
      {
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#242f3e"
          }
        ]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi",
        "stylers": [
          {
            "saturation": 25
          },
          {
            "lightness": -15
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#263c3f"
          }
        ]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#6b9a76"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#38414e"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#212a37"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#9ca5b3"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#746855"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          {
            "color": "#1f2835"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#f3d19c"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#2f3948"
          }
        ]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#d59563"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
          {
            "color": "#515c6d"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
          {
            "color": "#17263c"
          }
        ]
      }
    ]
  });

  var marker = new google.maps.Marker({
    position: campeche,
    map: map,
    title: 'Crown City Casino Campeche'
  });

  var marker = new google.maps.Marker({
    position: carmen,
    map: map,
    title: 'Crown City Casino Carmen'
  });

  var marker = new google.maps.Marker({
    position: coatza,
    map: map,
    title: 'Crown City Casino Coatzacoalcos'
  });

  var marker = new google.maps.Marker({
    position: juarez,
    map: map,
    title: 'Crown City Casino Juárez'
  });

  var marker = new google.maps.Marker({
    position: merida,
    map: map,
    title: 'Crown City Casino Mérida'
  });

  var marker = new google.maps.Marker({
    position: navojoa,
    map: map,
    title: 'Crown City Casino Navojoa'
  });

  var marker = new google.maps.Marker({
    position: villahermosa,
    map: map,
    title: 'Crown City Casino Villahermosa'
  });
}
