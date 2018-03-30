//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let map1 = L.map('map1').setView([30.01, 31.23], 11)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map1)
let thismarker = L.marker([29.975258, 31.137545]).addTo(map1)
let thisshape = L.polygon([
  [29.986715, 31.141093],
  [29.968574, 31.142809],
  [29.968798, 31.122639],
  [29.986715, 31.122296]
]).addTo(map1);
thisshape.bindPopup('Great Pyramids of Egypt')
thismarker.bindPopup('Great Spinx of Giza')
map1.on('click', function (event) {
  console.log('You selected ' + event.latlng)
})
let thispolyline = L.polyline([
  [29.974932, 31.137454],
  [29.975842, 31.13269]
]).addTo(map1);
