const mapboxgl = require('mapbox-gl')

mapboxgl.accessToken =
  'pk.eyJ1Ijoic2lhbWVzZWd1eSIsImEiOiJjamV6dGJwNmwwZnprMzFvYTVqZXR6eWF3In0.A391dwHbc5ypIjMcA3SV9g'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.0, 40.705],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
})
