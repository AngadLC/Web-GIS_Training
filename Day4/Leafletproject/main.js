var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var drawitems = new L.FeatureGroup()
map.addLayer(drawitems)

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup:drawitems, //REQUIRED!!
        // remove: false
    },
    draw:{
        polygon:false,
        // rectangle:false
    }
});
map.addControl(drawControl);

map.on("draw:created",function(e){
// console.log(e)
    map.addLayer(e.layer)
})