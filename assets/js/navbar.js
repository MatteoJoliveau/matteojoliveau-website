console.log('Yo WTF')

document.addEventListener('DOMContentLoaded', () => {
    window.ciao = "ciao";
    console.log('Preparing button')
    const button = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu')
    button.addEventListener('click', () => {
        console.log('Button click!')
        button.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});
