let projects = [ {
  id: 1,
  url: 'https://arcg.is/9yWSf',
  title: 'LSU Reported Incidents',
  desc: 'This website is for anyone on the LSU campus to report crimes and accidents.',
  thumb: true,
  keywords: [
    'crimes', 'incidents', 'accidents']
},
  {id: 2,
  url: 'http://arcg.is/2Dz8s21',
  title: 'Fort Bragg, CA',
  desc: 'Fort Bragg is a small coastal town in Northern California.',
  thumb: true,
  keywords: ['coastal town', 'California', 'Pacific Ocean']
} ]

for (let i = 0; i < projects.length; i++) {
  console.log('Element ' + i + ' title: ' + projects[i].title)
  if (projects[i].thumb === true) {
    console.log('ss-project-' + projects[i].id + '.png' );
  } else {
    console.log('no-preview.png')
  }
}
