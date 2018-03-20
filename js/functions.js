function createTitle (title) {
  console.log('Title: ' + title)
}
function createThumbnail (thumb, id) {
  if (thumb === true) {
    console.log('ss-project-' + id + '.png' );
  } else {
    console.log('no-preview.png')
  }
}
