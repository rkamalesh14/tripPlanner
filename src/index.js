const mapboxgl = require('mapbox-gl')
const marker = document.createElement("div")

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2lhbWVzZWd1eSIsImEiOiJjamV6dGJwNmwwZnprMzFvYTVqZXR6eWF3In0.A391dwHbc5ypIjMcA3SV9g'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.0, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
})

marker.style.width = "32px"
marker.style.height = "39px"
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

new mapboxgl.Marker(marker).setLngLat([-74.009, 40.705]).addTo(map)
