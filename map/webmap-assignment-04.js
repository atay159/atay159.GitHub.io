let map2 = L.map('map2').setView([39.3, -102.6], 3)
map2url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
L.tileLayer(map2url).addTo(map2)

thisStyle = function (State_Name) {
  let population = State_Name.properties.POPULATION
  let thisstateColor = 'Silver'
  if (State_Name.properties.POPULATION > 5000000) {thisstateColor = 'Indigo' }
  if (State_Name.properties.POPULATION < 1000000) {thisstateColor = 'Magenta' }
  let thisStyle = {
    color: thisstateColor,
    weight: 2,
    fillOpacity: 0.3
  }
  return thisStyle
}
function thisPopup (State_Name, statelayer) {
    let name = State_Name.properties.STATE_NAME
    let population = State_Name.properties.POPULATION
    let subregion = State_Name.properties.SUB_REGION
    statelayer.bindPopup('Population of ' + name + ': ' + population + '<br>Sub Region: ' + subregion)
  }
let thisOptions = {
  style: thisStyle,
  onEachFeature: thisPopup
}
L.geoJSON(statedemographics51, thisOptions).addTo(map2)
