let map2 = L.map('map2').setView([39.3, -102.6], 3)
map2url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(map2url).addTo(map2)

thisStyle = function (State_Name) {
  let population = state_name.POPULATION
  let stateColor = 'Red'
  if (POPULATION > 5000000) {stateColor = 'Purple' }
  let thisStyle = {
    color: thisstateColor,
    weight: 2,
    fillOpacity: 0.3
  }
  return thisStyle
}
function thisPopup (state, statelayer) {
    let name = feature.properties.STATE_NAME
    let population = feature.properties.POPULATION
    statelayer.bindPopup('Population ' + name + ': ' + population + '<br>Greater than: 5000000')
  }
let thisOptions = {
  style: thisStyle,
  onEachFeature: thisPopup
}
L.geoJSON(statedemographics51, thisOptions).addTo(map2)
