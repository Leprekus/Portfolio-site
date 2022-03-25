//vars
let doubleArrow = document.getElementById('double-arrow')
let test = document.querySelectorAll('main .content-wrapper')

let sections = document.querySelectorAll('.content-wrapper')

let counter = 0;

function changeSection() {
    counter += 1
    if(counter >= sections.length) {
        counter = 0
    }
    doubleArrow.href = `#${sections[counter].id}`
  
    // doubleArrow.href = `#${}`
}

doubleArrow.onclick = changeSection

