document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu')
    button.addEventListener('click', () => {
        button.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
})