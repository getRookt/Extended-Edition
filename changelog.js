// Get Changelog Descriptions
const changelogDescriptions = document.querySelectorAll('.changelog__li-desc')

// Automatic hotfix numeration in changelog descs
changelogDescriptions.forEach((changelogDescription, hotfixArray) => {
  hotfixArray = changelogDescription.querySelectorAll('.hotfix')
  hotfixArray.forEach((hotfix, i) => {
    hotfix.style.setProperty('--hotfix-num', '"Хотфикс #' + ++i + '"')
  })
})
