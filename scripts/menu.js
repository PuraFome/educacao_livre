document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    const main = document.querySelector('main');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('expanded');
        header.classList.toggle('expanded');
        main.classList.toggle('shifted');
    });
});