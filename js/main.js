const burger = document.querySelector('.nav__burger');
const menu = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__list-item');

burger.addEventListener('click', () => {
  menu.classList.toggle('active');
  burger.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
  });
});