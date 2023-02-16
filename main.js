let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
         search.classList.toggle('active');
}

//menu
let navbar = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () => {
         navbar.classList.toggle('active');
}

//scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});