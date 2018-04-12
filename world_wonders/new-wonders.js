let wondersMap = L.map('wondersMap').setView([28.254486, -40.841492], 1)

let thisBasemapUrl = 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png'
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
  'World_Imagery Map': thisBasemap3,
  'map': thisBasemap4
}

let thisControlOptions = {
  collapsed: true
}

let operationalLayers = {}

L.control.layers(theseBasemaps, operationalLayers, thisControlOptions).addTo(wondersMap)
