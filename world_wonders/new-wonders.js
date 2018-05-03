let wondersMap = L.map('wondersMap').setView([31.160126, -6.372255], 2)

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

let pyramidsIcon = L.icon({
  iconUrl: 'pyramid-png.png',
  iconSize: [40, 40], // size of the icon
  iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -20] // point from which the popup should open relative to the iconAnchor
})

let petraIcon = L.icon({
  iconUrl: 'petra.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let tajmahalIcon = L.icon({
  iconUrl: 'taj mahal.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let machupicchuIcon = L.icon({
  iconUrl: 'machu picchu.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let colosseumIcon = L.icon({
  iconUrl: 'colosseum.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let wallIcon = L.icon({
  iconUrl: 'great wall.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the i50, 50on which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let christIcon = L.icon({
  iconUrl: 'christ.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let chichenitzaIcon = L.icon({
  iconUrl: 'chichen-itza.png',
  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 25], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -25] // point from which the popup should open relative to the iconAnchor
})

let pyramidmarker = L.marker([29.978707, 31.134289], {icon: pyramidsIcon}).addTo(wondersMap)
pyramidmarker.bindPopup('The Great Pyramid of Giza, Egypt' + '<br>Constructed 2561 B.C.'+ '<br>Honorary World Wonder')

let tajmahalmarker = L.marker([27.173891, 78.042068], {icon: tajmahalIcon}).addTo(wondersMap)
tajmahalmarker.bindPopup('Taj Mahal, India' + '<br>Constructed 1648')

let machupicchumarker = L.marker([-13.163068, -72.545128], {icon: machupicchuIcon}).addTo(wondersMap)
machupicchumarker.bindPopup('Machu Picchu, Peru' + '<br>Constructed 1450')

let colosseummarker = L.marker([41.890251, 12.492373], {icon: colosseumIcon}).addTo(wondersMap)
colosseummarker.bindPopup('Colosseum, Italy' + '<br>Constructed A.D. 80')

let wallmarker = L.marker([40.433169, 116.563365], {icon: wallIcon}).addTo(wondersMap)
wallmarker.bindPopup('Great Wall of China, China' + '<br>Constructed 7th Century B.C.')

let petramarker = L.marker([30.331954, 35.446095], {icon: petraIcon}).addTo(wondersMap)
petramarker.bindPopup('Petra, Jordan' + '<br>Constructed 100 B.C.')

let christmarker = L.marker([-22.951871, -43.21118], {icon: christIcon}).addTo(wondersMap)
christmarker.bindPopup('Christ the Redeemer Statue, Brazil' + '<br>Constructed 1931')

let chichenitzamarker = L.marker([20.683001, -88.568595], {icon: chichenitzaIcon}).addTo(wondersMap)
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

let pyramidsCoords = [
  [29.980529, 31.126762],
  [29.980529, 31.138864],
  [29.971272, 31.138864],
  [29.971272, 31.126762]
]

let pyramidsstyle = {
  color: 'Indigo',
  fillColor: 'Indigo',
  fillOpacity: 0.3
}

let pyramidsshape = L.polygon(pyramidsCoords, pyramidsstyle).addTo(wondersMap)
pyramidsshape.bindPopup('Great Pyramids of Egypt')

let wallCoords = [
  [40.427289, 116.604163],
  [40.439079, 116.592964],
  [40.441561, 116.587468],
  [40.43934, 116.580255],
  [40.437733, 116.577925],
  [40.436785, 116.578569],
  [40.435315, 116.575435],
  [40.430056, 116.571141],
  [40.429044, 116.568522],
  [40.429632, 116.565989],
  [40.436785, 116.561996],
  [40.448528, 116.553765],
  [40.451925, 116.543808],
  [40.454537, 116.545268],
  [40.454864, 116.543121],
  [40.452708, 116.541404],
  [40.456431, 116.528335],
  [40.45294, 116.518792],
  [40.453507, 116.515294],
  [40.456762, 116.509119],
  [40.453993, 116.500237],
  [40.463745, 116.495685]
]

let wallstyle = {
  color: 'Indigo'
}

let wallshape = L.polyline(wallCoords, wallstyle).addTo(wondersMap)
wallshape.bindPopup('Great Wall of China')

let colosseumshape = L.circle([41.890251, 12.492373], {
    color: 'deeppink',
    fillColor: '#FF1493',
    fillOpacity: 0.3,
    radius: 250
}).addTo(wondersMap);
colosseumshape.bindPopup('Roman Colosseum')

let petraCoords = [
  [30.350522, 35.425586],
  [30.309035, 35.425586],
  [30.309035, 35.458217],
  [30.350522, 35.458217]
]

let petrastyle = {
  color: 'Indigo',
  fillColor: 'Indigo',
  fillOpacity: 0.3
}

let petrashape = L.polygon(petraCoords, petrastyle).addTo(wondersMap)
petrashape.bindPopup('Petra')

let chichenitzashape = L.circle([20.683001, -88.568595], {
    color: 'deeppink',
    fillColor: '#FF1493',
    fillOpacity: 0.3,
    radius: 250
}).addTo(wondersMap);
chichenitzashape.bindPopup('Chichen Itza')

let tajmahalCoords = [
  [27.175474, 78.040656],
  [27.175474, 78.043704],
  [27.170415, 78.043704],
  [27.170415, 78.040656]
]

let tajmahalstyle = {
  color: 'cyan',
  fillColor: '#00FFFF',
  fillOpacity: 0.3
}
let tajmahalshape = L.polygon(tajmahalCoords, tajmahalstyle).addTo(wondersMap)
tajmahalshape.bindPopup('Taj Mahal')

let machupicchuCoords = [
  [-13.161894, -72.546448],
  [-13.161643, -72.545718],
  [-13.162167, -72.544929],
  [-13.16245, -72.544478],
  [-13.162585, -72.544017],
  [-13.162951, -72.543748],
  [-13.163714, -72.544092],
  [-13.165138, -72.542972],
  [-13.167192, -72.543298],
  [-13.166231, -72.545971],
  [-13.16527, -72.545455],
  [-13.164208, -72.546142]
]

let machupicchustyle = {
  color: 'cyan',
  fillColor: '#00FFFF',
  fillOpacity: 0.3
}
let machupicchushape = L.polygon(machupicchuCoords, machupicchustyle).addTo(wondersMap)
machupicchushape.bindPopup('Machu Picchu')

let christstatueshape = L.circle([-22.951871, -43.21118], {
    color: 'lime',
    fillColor: '#00FF00',
    fillOpacity: 0.3,
    radius: 150
}).addTo(wondersMap);
christstatueshape.bindPopup('Christ the Redeemer')

wondersMap.on('click', function (event) {
  console.log('You selected ' + event.latlng)
})


L.control.layers(theseBasemaps, operationalLayers, thisControlOptions).addTo(wondersMap)
