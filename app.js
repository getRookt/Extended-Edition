// Value limit function
function valueLimit(val, min, max) {
  return val < min ? min : val > max ? max : val
}

// Get the navbar and navbarImg
const navbar = document.querySelector('.nav')
const navbarImg = document.querySelector('.nav-img')

// Add filters when window is scrolling
function backdropNavbar() {
  navbar.style.backdropFilter = 'blur(' + valueLimit(window.scrollY / 200, 0, 3) + 'px)'
  navbar.style.background = 'rgba(0, 0, 0,' + valueLimit(window.scrollY / 600, 0, 0.65) + ')'
  if (navbar.firstElementChild == navbarImg) {
    navbarImg.style.opacity = '' + valueLimit(1 - window.scrollY / 1, 0, 1) + ''
  }
  if (window.innerWidth > 768) {
    navbarMob.classList.remove('active')
    navbarButtonMob.classList.remove('active')
  }
}

// When the user scrolls the page, execute backdropNavbar
window.addEventListener('scroll', backdropNavbar)

// When the user load page calculate backdrop percent
window.addEventListener('load', backdropNavbar)

// When user resize the page calculate backdrop percent
window.onresize = backdropNavbar

// Get email footer text
const emailText = document.querySelector('.footer__text')

// Email copy to clipboard after click
emailText.addEventListener('click', function () {
  navigator.clipboard.writeText('alan2008358@gmail.com')
  emailText.style.setProperty('--email-Copy-FZ', '0.7rem')
})

// Get Mobile NavBar Button

const navbarButtonMob = document.querySelector('.nav-button')
const navbarMob = document.querySelector('.nav-mobile')

// Navbar on mobile show
window.onclick = () => {
  if (navbarButtonMob.querySelector('img') == event.target) {
    navbarMob.classList.toggle('active')
    navbarButtonMob.classList.toggle('active')
  } else {
    navbarMob.classList.remove('active')
    navbarButtonMob.classList.remove('active')
  }
}
