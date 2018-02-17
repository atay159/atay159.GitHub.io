// assign values to a set of variables representing a project's metadata
let projectId = 1
let projectUrl = 'https://arcg.is/1HnCr1'
let projectTitle = 'Map of Recent Earthquakes'
let projectDesc = 'An ArcGIS Online Web App showing worldwide earthquakes of magnitude 4.5 or greater that have occurred in the last 7 days. The dataset is streamed from the USGS.'
let projectThumb = true
let projectMapExtent = [48.51, -28.37, 2.63, -132.34]

let projectArray = {
  1,
  'https://arcg.is/1HnCr1',
  'Map of Recent Earthquakes'
  'An ArcGIS Online Web App showing worldwide earthquakes of magnitutde 4.5 or greater',
  true,
  ['earthquake', 'usgs']
}

let projectObject = {
  id: 1,
  url: 'https://arcg.is/1HnCr1'
  title: 'Map of Recent Earthquakes',
  description: ''An ArcGIS Online Web App showing worldwide earthquakes of magnitutde 4.5 or greater'',
  hasThumbnail: true,
  keyword: ['earthqukes', 'usgs']
}

let myNumber = 7
let myString = 'Some Text'
let myBoolean = true
let myArray = ['apple', 'orange', 'pear']

// display messages in the browser's developer console, combining the values with text
console.log('ID: ' + projectId)
console.log('URL: ' + projectUrl)
console.log('Title: ' + projectTitle)
console.log('Description: ' + projectDesc)
console.log('Has thumbnail? ' + projectThumb)
console.log('Map extent: ' + projectMapExtent)
