//vars
let doubleArrow = document.getElementById('double-arrow')
let test = document.querySelectorAll('main .content-wrapper')

function getOffsetTop() {
    test.forEach(element => {
        const leftOffset =  element.offsetLeft;
        const rightOffset = element.offsetRight
        const elementWidth = element.offsetWidth
        if (leftOffset + rightOffset < elementWidth) {
            console.log('small')
        }
    })
}

window.addEventListener('scroll', getOffsetTop)
