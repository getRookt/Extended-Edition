// If the page was loaded from install page link refering to target "#fullscreen" then scrollIntoView fullscreen instruction
window.onload = () => {
  if (window.name == '#fullscreen') {
    document.querySelector('#fullscreen').scrollIntoView()
    document.querySelector('#fullscreen').firstElementChild.click()
    window.name = 'opened'
  }
}

// Call function
openElement('fullscreen', 'fullscreenLink')
