// This is an array
let projectArray0 = [
  1,
  'https://arcg.is/1HnCr1',
  'Map of Recent Earthquakes',
  'An ArcGIS Online Web App showing worldwide earthquakes of magnitutde 4.5 or greater',
  true,
  ['earthquake', 'usgs']
]

// This is an object. Each value is paired with a property.
let projectObject0 = {
  id: 1,
  url: 'https://arcg.is/1HnCr1',
  title: 'Map of Recent Earthquakes',
  description: 'An ArcGIS Online Web App showing worldwide earthquakes of magnitutde 4.5 or greater',
  hasThumbnail: true,
  keyword: ['earthqukes', 'usgs']
}


// This is an array
let projectArray1 = [
  1,
  'https://arcg.is/9yWSf',
  'LSU Reported Incidents',
  'This website is for anyone on the LSU campus to report crimes and accidents.',
  true,
  ['crimes', 'incidents', 'accidents']
]

// This is an object. Each value is paired with a property.
let projectObject1 = {
  id: 1,
  url: 'https://arcg.is/9yWSf',
  title: 'LSU Reported Incidents',
  desc: 'This website is for anyone on the LSU campus to report crimes and accidents.',
  thumb: true,
  keywords: [
    'crimes',
    'incidents',
    'accidents'
  ]
}

console.log(projectArray[0])
console.log(projectObject.title)
console.log(projectObject["Map of Recent Earthquakes"])
