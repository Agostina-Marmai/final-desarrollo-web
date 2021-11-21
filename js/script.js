/* const menuIcon = document.querySelector ('.hamburger-menu');
const navbar = document.querySelector ('.navbar');

menuIcon.addEventListener ('click', () => {
    navbar.classList.toggle('change');
}); */

const header = document.querySelector ('.main-header');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if(scrollPos > 10){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})