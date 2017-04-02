function initialize(){
  var mapOptions = {
    zoom: 8,
    center: {lat: 41.401207, lng: -72.564605}
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var locations = [
    {name: 'Kings Park Psychiatric Center', address: 'W 4TH ST, KINGS PARK, NY 11754', lat: 40.897433, lng: -73.244422},
    {name: 'Welwyn Preserve', address: '100 CRESCENT BEACH RD, GLEN COVE, NY 11542', lat: 40.884929, lng: -73.640373},
    {name: 'The Bells', address: 'OCEAN DRIVE, NEWPORT, RI 02840', lat: 41.4528, lng: -71.3544},
    {name: 'Enchanted Forest', address: '909 MAIN STREET, HOPE VALLEY, RI 02832', lat: 41.4666, lng: -71.7695},
    {name: 'Camp Hero', address: '1898 MONTAUK HWY, MONTAUK, NY 11954', lat: 41.063081, lng: -71.872982},
    {name: 'East Nassau Hebrew Synagogue', address: '310 S OYSTER BAY RD # A, SYOSSET, NY 11791', lat: 40.794482, lng: -73.503689},
  ];

  locations.forEach(function(element, index, array){
    var marker, content;

    marker = createMarker(element);
    content = createInfoWindow(element, marker);
  });

  function createMarker(location){
    var coordinates = new google.maps.LatLng(location.lat, location.lng); 

    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: location.name
    });

    return marker;
  }

  function createInfoWindow(element, marker){
    var contentString;

    contentString = "<div><span>" + element.name + "</span></div><div>" + element.address + "</div>";

    var infoWindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 150
    });

    google.maps.event.addListener(marker, 'click', function(){
      infoWindow.open(map, marker);
    });
  }
}

// google.maps.event.addDomListener(window, 'load', initialize);
window.onload = function() {
  initialize();
}
