let wondersMap = L.map('wondersMap').setView([28.254486, -40.841492], 2)

let thisBasemapUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
let thisBasemap = L.tileLayer(thisBasemapUrl)
thisBasemap.addTo(wondersMap)

let thisBasemap2Url = 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
let thisBasemap2 = L.tileLayer(thisBasemap2Url)

let thisBasemap3Url = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
let thisBasemap3 = L.tileLayer(thisBasemap3Url)

let thisBasemap4Url = 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
let thisBasemap4 = L.tileLayer(thisBasemap4Url)

let theseBasemaps = {
  'Basic Map': thisBasemap,
  'Topo Map': thisBasemap2,
  'World Imagery Map': thisBasemap3,
  'Equator Map': thisBasemap4
}

let thisControlOptions = {
  collapsed: true
}

let operationalLayers = {}

L.control.layers(theseBasemaps, operationalLayers, thisControlOptions).addTo(wondersMap)

let thismarker = L.marker([29.978707, 31.134289]).addTo(wondersMap)
thismarker.bindPopup('The Great Pyramid of Giza' + '<br>Constructed between 2584-2561 B.C.'+ '<br>Honorary World Wonder')
