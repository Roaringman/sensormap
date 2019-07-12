const fetch = require('node-fetch');

var date = "2019-07-11T13%3A18%3A02.412Z"; //rf
var phenomenon = "PM10"; //string
var format = "geojson"; //geojson json
var exposure = "outdoor"; //indoor
var bbox = "5.559082%2C47.234490%2C15.183105%2C55.266598";


fetch(`https://api.opensensemap.org/boxes?date=${date}&phenomenon=${phenomenon}&format=+${format}&exposure=${exposure}&bbox=${bbox}`)
    .then(res => res.json())
    .then(json => console.log(json));