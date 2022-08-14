function activeSideMenu () {
    const burgerMenu = document.querySelector('header > div')
    burgerMenu.classList.add('active')
    burgerMenu.classList.remove('closeMenu')
}

function closeSideMenu() {
    const sideIsActive = document.querySelector('.active');
        if (sideIsActive) {
            sideIsActive.classList.remove('active')
           sideIsActive.classList.add('closeMenu') 
        }
}