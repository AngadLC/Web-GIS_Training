var map = L.map('map').setView([28.2613, 83.9721], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// L.marker([28.2613, 83.9721]).addTo(map)
//     .bindPopup('Hi, I am a popup.')
//     .openPopup();

// async function addGeoJson() {
//     const response = await fetch("pokhara.geojson");
//     const data = await response.json();
//     L.geoJson(data).addTo(map);
// }

// addGeoJson();

// $.getJSON("pokhara.geojson", function (data) {
//     L.geoJson(data).addTo(map);
//     console.log(turf.area(data));
// });

// var features = turf.points([
//     [-97.522259, 35.4691],
//     [-97.502754, 35.463455],
//     [-97.508269, 35.463245]
//   ]);
  
// var center = turf.center(features);
// L.geoJson(center).addTo(map);