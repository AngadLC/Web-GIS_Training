var map = L.map('map').setView([28.2613, 83.9721], 13);

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
        // polygon:false
    }
})
map.addControl(drawControl)

map.on('draw:created',function(e){
    console.log(e.layer)
    map.addLayer(e.layer)
    drawItems.addLayer(e.layer);
    //console.log("hi draw finish")
})


// Geojson Data
var geo;
function geoJsonData(file) {
    var reader = new FileReader();
    reader.onload = function () {
        geo = omnivore.geojson(reader.result).addTo(map);
    };
    reader.readAsDataURL(file);
}

// Add Vector Layers
function vectorData() {
    var inputNode = document.createElement('input');
    inputNode.setAttribute('type', 'file');
    inputNode.setAttribute('accept', '.geojson');

    inputNode.addEventListener("change", function (e) {
        var files = inputNode.files;
        var file = files[0];
        geoJsonData(file);
    });
    inputNode.click();
}

// GeoJson Button
L.easyButton('fa-earth-asia fa-lg', function () {
    vectorData();
}, "Add Vector Layers").addTo(map);

document.getElementById('export').onclick = function () {
    var data;
    // Extract GeoJson from featureGroup
    if (geo) {
        drawItems.addLayer(geo); 
        data = drawItems.toGeoJSON(); 
    }else { 
        data = drawItems.toGeoJSON(); 
    }

    // Stringify the GeoJson
    var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));

    // Create export
    document.getElementById('export').setAttribute('href', 'data:' + convertedData);
    document.getElementById('export').setAttribute('download', 'data.geojson');
}

// Download Button
L.easyButton('fa-download fa-lg', function () {
    document.getElementById('export').click();
}, "Export As Geojson").addTo(map);