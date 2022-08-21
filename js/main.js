const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});