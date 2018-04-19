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

let pyramidmarker = L.marker([29.978707, 31.134289]).addTo(wondersMap)
pyramidmarker.bindPopup('The Great Pyramid of Giza, Egypt' + '<br>Constructed 2561 B.C.'+ '<br>Honorary World Wonder')

let tajmahalmarker = L.marker([27.173891, 78.042068]).addTo(wondersMap)
tajmahalmarker.bindPopup('Taj Mahal, India' + '<br>Constructed 1648')

let machupicchumarker = L.marker([-13.163068, -72.545128]).addTo(wondersMap)
machupicchumarker.bindPopup('Machu Picchu, Peru' + '<br>Constructed 1450')

let colosseummarker = L.marker([41.890251, 12.492373]).addTo(wondersMap)
colosseummarker.bindPopup('Colosseum, Italy' + '<br>Constructed A.D. 80')

let wallmarker = L.marker([40.431908, 116.570374]).addTo(wondersMap)
wallmarker.bindPopup('Great Wall of China, China' + '<br>Constructed 7th Century B.C.')

let petramarker = L.marker([30.32221, 35.47933]).addTo(wondersMap)
petramarker.bindPopup('Petra, Jordan' + '<br>Constructed 100 B.C.')

let christmarker = L.marker([-22.951871, -43.21118]).addTo(wondersMap)
christmarker.bindPopup('Christ the Redeemer Statue, Brazil' + '<br>Constructed 1931')

let chichenitzamarker = L.marker([20.683259, -88.570341]).addTo(wondersMap)
chichenitzamarker.bindPopup('Chichen Itza, Mexico' + '<br>Constructed A.D. 600')

let thisControlOptions = {
  collapsed: true
}

let operationalLayers = {
  'Great Pyramid': pyramidmarker,
  'Great Wall': wallmarker,
  'Taj Mahal': tajmahalmarker,
  'Machu Picchu': machupicchumarker,
  'Colosseum': colosseummarker,
  'Petra': petramarker,
  'Christ Statue': christmarker,
  'Chichen Itza': chichenitzamarker
}

L.control.layers(theseBasemaps, operationalLayers, thisControlOptions).addTo(wondersMap)
