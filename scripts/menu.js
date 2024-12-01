document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const logo = document.querySelector('.logo');

    const toggleMenu = () => {
        navLinks.classList.toggle('expanded');
        header.classList.toggle('expanded');
        main.classList.toggle('shifted');
        logo.classList.toggle('expanded');
    };

    menuToggle.addEventListener('click', toggleMenu);
});