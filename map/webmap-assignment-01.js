//let someName = L.map('your-map-div-id').setView([yourLat, yourLon], yourZoom)
let map1 = L.map('map1').setView([30.01, 31.23], 16)
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map1)
let thismarker = L.marker([30.0, 31.2]).addTo(map1)
let thisshape = L.polygon([
  [30.07, 31.21],
  [29.97, 31.05],
  [29.96, 31.28]
]).addTo(map1);
