// Get hidden traits block
const traitsBlock = document.querySelectorAll('.traits__block')

// Intersection observer tells if user can see an element
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('scrolled')
    }
  })
})

// Remove scrolled class on scrolling to the top of window
window.onscroll = () => {
  if (window.scrollY == 0) {
    traitsBlock.forEach((block) => {
      block.classList.remove('scrolled')
    })
  }
}

// Tell observer what to observe
traitsBlock.forEach((el) => observer.observe(el))
