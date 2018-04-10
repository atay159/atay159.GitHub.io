let map3 = L.map('map3').setView([39.3, -102.6], 3)

let thisBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let thisBasemap = L.tileLayer(thisBasemapUrl)
thisBasemap.addTo(map3)

let thisBasemap2Url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
let thisBasemap2 = L.tileLayer(thisBasemap2Url)

let thisBasemap3Url = 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
let thisBasemap3 = L.tileLayer(thisBasemap3Url)

let theseBasemaps = {
  'World Imagery Map': thisBasemap,
  'Topo Map': thisBasemap2,
  'Plain Map': thisBasemap3
}

let thisControlOptions = {
  collapsed: true
}

let operationalLayers = {}

L.control.layers(theseBasemaps, operationalLayers, thisControlOptions).addTo(map3)

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
L.geoJSON(statedemographics51, thisOptions).addTo(map3)
