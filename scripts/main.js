//nav vars
let burgerNavButton = document.getElementById('burger-nav-button')
let dropDownMenu = document.getElementById('dropdown-menu')

// Section vars
let contactSection = document.getElementById('contact')
let projectsSection = document.getElementById('projects')
let blogSection = document.getElementById('blog')

function toggleVisibility(domElement) {

}


burgerNavButton.addEventListener('click', () => toggleVisibility(dropDownMenu))

