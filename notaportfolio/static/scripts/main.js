const burgerBtn = document.querySelector('.navbar_burger');
const navMenu = document.querySelector('.navbar_nav');

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});