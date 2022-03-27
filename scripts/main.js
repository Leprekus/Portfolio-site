//vars desktop 
let doubleArrow = document.getElementById('double-arrow')
let test = document.querySelectorAll('main .content-wrapper')

let sections = document.querySelectorAll('.content-wrapper')
let navBubbles = document.querySelectorAll('.nav-bubbles-container-desktop .nav-bubbles')
let counter = 0;

function highlightNavBubbles() {

  if(counter === 0) {
        navBubbles[counter].classList.add('current')
        navBubbles[navBubbles.length - 1].classList.remove('current')
    } else {
        navBubbles[counter].classList.add('current')
        navBubbles[counter - 1].classList.remove('current')    
    }    
}

function changeSection() {
    counter += 1
    if(counter >= sections.length) {
        counter = 0
    }
    doubleArrow.href = `#${sections[counter].id}`
    highlightNavBubbles()

    // doubleArrow.href = `#${}`
}

doubleArrow.onclick = changeSection


// vars mobile

let burgerNavButton = document.getElementById('burger-nav-button')
let dropDownMenu = document.getElementById('dropdown-menu')

function slideDropDownMenuIntoView () {
    
        if (dropDownMenu.style.top === '-200px') {
            dropDownMenu.style.top = '150px'
    } else {
        dropDownMenu.style.top = '-200px'
    }
   
}

burgerNavButton.onmouseover = slideDropDownMenuIntoView