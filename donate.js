// Get hearts
const hearts = document.querySelectorAll('.heart')

// Get popup message
let heartPopup = document.querySelector('.popup-heart')

// Get donate list
const donateList = document.querySelector('.donate__list-inner')

// Get button from donate list
const donateButton = document.querySelector('.donate__list-button')

// Donate button function
donateButton.addEventListener('click', () => {
  if (donateList.scrollTop >= donateList.scrollHeight / 2 - donateList.clientHeight) {
    donateList.scrollBy({
      top: -donateList.scrollHeight,
      behavior: 'smooth',
    })
  } else {
    donateList.scrollBy({
      top: donateList.scrollHeight,
      behavior: 'smooth',
    })
  }
})

// Donate button rotate
donateList.addEventListener('scroll', () => {
  // Check if scroll is above half
  if (donateList.scrollTop < donateList.scrollHeight / 2 - donateList.clientHeight) {
    donateButton.animate(
      {
        transform: 'rotate(180deg)',
        transform: 'rotate(0)',
      },
      { duration: 1000, easing: 'ease', fill: 'forwards' }
    )
  }
  // Check if scroll is below half and rotate state
  else if (donateList.scrollTop >= donateList.scrollHeight / 2 - donateList.clientHeight) {
    donateButton.animate(
      {
        transform: 'rotate(0)',
        transform: 'rotate(180deg)',
      },
      { duration: 1000, easing: 'ease', fill: 'forwards' }
    )
  }
})

// Create individual popup messages for every heart
for (let i = 0; i < hearts.length; i++) {
  let heartPopupIndEl = document.createElement('div')
  heartPopupIndEl.setAttribute('id', 'heart-' + i + '')
  heartPopupIndEl.setAttribute('class', 'popup-heart')
  heartPopupIndEl.appendChild(document.createTextNode('Оплатил комиссию или закинул через QIWI'))
  document.body.appendChild(heartPopupIndEl)
}

// Adds individual message for every heart to array
const heartPopupInd = new Array()
for (let i = 0; i < hearts.length; i++) {
  heartPopupInd.push(document.getElementById('heart-' + i + ''))
}

// Add event listener for every heart and show popup message on hover
hearts.forEach((heart, i) => {
  // Event on mouse over
  heart.addEventListener('mouseover', () => {
    // Get width of document
    let documentWidth = document.documentElement.offsetWidth

    // Position of heart emoji
    let heartPos = heart.getBoundingClientRect()

    // Position of heart Popup
    let heartPopupPos = heartPopupInd[i].getBoundingClientRect()

    // Popup styling
    heartPopupInd[i].style.visibility = 'visible'
    heartPopupInd[i].style.top =
      heartPos.top +
      document.documentElement.scrollTop -
      (heartPopupPos.height - heartPos.height / 5) +
      'px'

    // Check if the heartPoup overflowing the document, if it is, then move it to left corner of heart emoji
    if (
      heartPos.right + heartPopupPos.width > documentWidth &&
      heartPos.left - heartPopupPos.width - heartPopupPos.width > 0
    ) {
      heartPopupInd[i].style.left = heartPos.left - heartPopupPos.width + 'px'
    } else {
      heartPopupInd[i].style.left = heartPos.right + 'px'
    }

    heartPopupInd[i].style.opacity = 1
  })

  // Event on mouse out
  heart.addEventListener('mouseout', () => {
    heartPopupInd[i].style.opacity = 0
    heartPopupInd[i].style.visibility = 'hidden'
  })
})
