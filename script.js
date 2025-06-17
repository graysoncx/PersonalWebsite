
/*=================================*/
// Basic mobile menu toggle
/*=================================*/
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('show');
});

/*=================================*/
//Google Maps JS API
/*=================================*/

let map1, map2, map3; // Declare variables for each map

function initMap() {
  const map1Center = { lat: 41.3082, lng: -72.9261 }; // Approximate downtown West Haven
  const radiusInMeters = 8046.7; // 5 miles in meters

/*=================================*/
// Map 1: New Haven
/*=================================*/
    

  map1 = new google.maps.Map(document.getElementById("map1"), {
    center: map1Center,
    zoom: 11,
    disableDefaultUI: false,
    draggable: false,
  });
  new google.maps.Circle({
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    map: map1,
    center: map1Center,
    radius: radiusInMeters,
  });

 /*=================================*/
// Map 2: West Haven
/*=================================*/
    
  const map2Center = { lat: 41.2758, lng: -72.9757 }; // "Stop & Shop", West Haven
  map2 = new google.maps.Map(document.getElementById("map2"), {
    center: map2Center,
    zoom: 11,
    disableDefaultUI: false,
    draggable: false,
  });
  new google.maps.Circle({
    strokeColor: "#0000FF", // Different color for distinction
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
    map: map2,
    center: map2Center,
    radius: radiusInMeters,
  });
    
/*=================================*/
// Map 3: Stamford
/*=================================*/
  
  const map3Center = { lat: 41.0534, lng: -73.5387 }; // Stamford
  map3 = new google.maps.Map(document.getElementById("map3"), {
    center: map3Center,
    zoom: 11,
    disableDefaultUI: false,
    draggable: false,
  });
  new google.maps.Circle({
    strokeColor: "#00FF00", // Different color for distinction
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.35,
    map: map3,
    center: map3Center,
    radius: radiusInMeters,
  });
}
