var map = L.map('map').setView([28.2613, 83.9721], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// async function addGeoJson() {
//     const response = await fetch("pokhara.geojson");
//     const data = await response.json();
//     L.geoJson(data).addTo(map);
// }

// addGeoJson();

// $.getJSON("point.geojson", function(data) {
//     L.geoJson(data).addTo(map);
// })

// var point = turf.point([83.9721, 28.2613]);
// var buffered = turf.buffer(point, 500, {units: 'meters'});
// L.geoJson(buffered).addTo(map);

$.getJSON("point.geojson", function (data) {
    var data1 = L.geoJson(data);
    var features = data1.toGeoJSON();
    var buffered = turf.buffer(features, 500, {units: 'meters'});
    L.geoJson(buffered).addTo(map);
});

