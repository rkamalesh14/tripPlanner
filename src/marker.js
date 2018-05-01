const mapboxgl = require("mapbox-gl")

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  activities: "http://i.imgur.com/WbMOfMl.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
}

const createMarker = (type, lat, long) => {
  let newMarker = document.createElement("div")
  let url = `url(${iconURLs[type]}`
  let cdx = [lat, long]

  newMarker.style.width = "32px"
  newMarker.style.height = "39px"
  newMarker.style.backgroundImage = url

  return new mapboxgl.Marker(newMarker).setLngLat(cdx)
}

module.exports = {
  createMarker
}
