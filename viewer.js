// ViewerJS
// You should import the CSS file.
// import 'viewerjs/dist/viewer.css'
// import Viewer from 'viewerjs'

// Select all #images
const images = document.querySelectorAll('#image')
// Add Viewer to each image
images.forEach((image) => {
  // View an image.
  new Viewer(image, {
    inline: false,
    toolbar: false,
  })
})
// Then, show the image by clicking it, or call `viewer.show()`.

// View a list of images.
// Note: All images within the container will be found by calling `element.querySelectorAll('img')`.
const gallery = new Viewer(document.getElementById('images'))
// Then, show one image by click it, or call `gallery.show()`.
