// Get Accordion Titles
const accItems = document.querySelectorAll('.accordion-title')

// Array for Accordion Descriptions Height
const itemsHeight = new Array()

// Size for margin
const marginSize =
  getComputedStyle(document.documentElement).getPropertyValue('--accordion-desc-margin') / 16 +
  'rem'

// Add to each Accordion title event listener to open the accordion on the click
accItems.forEach((accItem, i, accDesc) => {
  accDesc = accItem.nextElementSibling
  accItem.addEventListener('click', () => {
    accItem.style.color = accItem.style.color == 'white' ? '#ccc' : 'white'
    accDesc.style.opacity = accDesc.style.opacity == '' ? '1' : ''
    accDesc.style.marginTop = accDesc.style.marginTop == '' ? marginSize : ''
    accDesc.style.height = accDesc.style.height == '' ? itemsHeight[i] / 16 + 'rem' : ''
  })
})

// Accordion desc calculate function

function accordionDescCalc() {
  // Clear array with heights
  itemsHeight.length = 0
  // Edit height for every accordion desc
  accItems.forEach((accItem, i, accDesc) => {
    accDesc = accItem.nextElementSibling
    // Check if accordion desc is opened
    if (accDesc.style.height > '') {
      accDesc.style.height = 'auto'
      itemsHeight.push(accDesc.offsetHeight)
      accDesc.style.height = accDesc.offsetHeight / 16 + 'rem'
    }
    // Standard accordion height calculate then push to array for click
    else {
      accDesc.style.height = 'auto'
      itemsHeight.push(accDesc.offsetHeight)
      accDesc.style.height = ''
    }
  })
}

// Calculate height for each accordion on window load
window.onload = accordionDescCalc()

// Calculate height for each accordion on window resize
window.onresize = accordionDescCalc

// Open element by click on link
function openElement(element, link) {
  // Get Element clickable title
  let elementId = document.getElementById('' + element + '').firstElementChild

  // Get link in desc of some item that points to element title
  let linkId = document.getElementById('' + link + '')

  // Calc timeout time before click with transition duration of accordion so it won't open instatly on click
  let transDur =
    Number(
      getComputedStyle(elementId.nextElementSibling)
        .getPropertyValue('transition-duration')
        .replace('s', '')
    ) * 1500

  // Click on element title so it will open the accordion of it
  linkId.onclick = function () {
    setTimeout(() => {
      elementId.click()
    }, transDur)
  }
}
