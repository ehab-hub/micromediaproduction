const hamburgrMenu = document.querySelector('.hamburgr');
const mobileMenu = document.querySelector('.nav-items-div-mobile');
const navItems1 = document.querySelector('.nav-item-about');
const navItems2 = document.querySelector('.nav-item-services');
const navItems3 = document.querySelector('.nav-item-projects');
const navItems4 = document.querySelector('.nav-item-footer');

const menuIsActive = () => {
    hamburgrMenu.classList.toggle('active');
    mobileMenu.classList.toggle('block-nav');

};
hamburgrMenu.addEventListener('click', menuIsActive);

const removenav = () => {
    mobileMenu.classList.remove('block-nav');
    hamburgrMenu.classList.toggle('active');

};
navItems1.addEventListener('click', removenav);
navItems2.addEventListener('click', removenav);
navItems3.addEventListener('click', removenav);
navItems4.addEventListener('click', removenav);