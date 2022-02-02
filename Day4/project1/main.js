var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var drawItems = new L.FeatureGroup()
map.addLayer(drawItems)

var drawControl = new L.Control.Draw({
    edit:{
        featureGroup : drawItems
    },
    draw:{
        <!-- polygon:false -->
    }
})
map.addControl(drawControl)

map.on('draw:created',function(e){
    console.log(e.layer)
    map.addLayer(e.layer)
    <!-- console.log("hi draw finish") -->
})