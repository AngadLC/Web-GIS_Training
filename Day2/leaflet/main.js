var map = L.map('map').setView([28.2613, 83.9721], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([28.2613, 83.9721]).addTo(map)
    .bindPopup('Hi, I am a popup.')
    .openPopup();