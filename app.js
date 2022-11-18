// Value limit function
function valueLimit(val, min, max) {
  return val < min ? min : val > max ? max : val
}

// Get the navbar and navbarImg
const navbar = document.querySelector('.nav')
const navbarImg = document.querySelector('.nav-img')

// Add filters when window is scrolling
function backdropNavbar() {
  // navbar.classList.add('active-nav')
  navbar.style.backdropFilter = 'blur(' + valueLimit(window.scrollY / 200, 0, 3) + 'px)'
  navbar.style.background = 'rgba(0, 0, 0,' + valueLimit(window.scrollY / 600, 0, 0.65) + ')'
  if (navbar.firstElementChild == navbarImg) {
    navbarImg.style.opacity = '' + valueLimit(1 - window.scrollY / 1, 0, 1) + ''
  }
}

// When the user scrolls the page, execute backdropNavbar
window.addEventListener('scroll', function () {
  backdropNavbar()
})

// When the user load page calculate backdrop percent
window.onload = function () {
  backdropNavbar()
}

// Get email footer text
const emailText = document.querySelector('.footer__text')

// Email copy to clipboard after click
emailText.addEventListener('click', function () {
  navigator.clipboard.writeText('alan2008358@gmail.com')
  emailText.style.setProperty('--email-Copy-FZ', '0.7rem')
})
