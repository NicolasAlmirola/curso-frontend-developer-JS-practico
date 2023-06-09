const navbarEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const MenuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

navbarEmail.addEventListener('click', toggleDesktopMenu)
MenuHamIcon.addEventListener('click', toggleMobileMenu)

function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive')
}