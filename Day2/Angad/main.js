var map = L.map('map').setView([28.20099116015622, 83.9810281457143], 13);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
}).addTo(map);

L.marker([28.20099116015622, 83.9810281457143]).addTo(map)
    .bindPopup('Pokhara Airport')
    .openPopup();

var circle = L.circle([28.20099116015622, 83.9810281457143], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 200
}).addTo(map);
// scale bar
L.control.scale().addTo(map);
// baselayers
var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    subdomains: ['mt0', 'mt1', 'mt2', 'mt3']
});
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
var baseMaps = {
    "googleHybrid": googleHybrid,
    "googleSat": googleSat,
    "OpenTopoMap": OpenTopoMap
};
L.control.layers(baseMaps).addTo(map)
