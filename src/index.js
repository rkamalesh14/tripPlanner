const mapboxgl = require('mapbox-gl')
const marker = document.createElement("div")
const { createMarker } = require('./marker')

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

new mapboxgl.Marker(marker).setLngLat([-74.009, 40.710]).addTo(map)


const x = createMarker("hotels", -74.010, 40.705)
x.addTo(map)
const y = createMarker("activities", -74.010, 40.715)
y.addTo(map)
const z = createMarker("restaurants", -74.010, 40.720)
z.addTo(map)


