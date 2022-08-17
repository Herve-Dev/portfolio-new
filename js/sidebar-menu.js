function activeSideMenu () {
    const burgerMenu = document.querySelector('header > div')
    burgerMenu.classList.add('active')
    burgerMenu.classList.remove('sidemenu-disable')
}

function closeSideMenu() {
    const sideIsActive = document.querySelector('.active');
        if (sideIsActive) {
            sideIsActive.classList.remove('active')
            sideIsActive.classList.add('sidemenu-disable') 
        }
}