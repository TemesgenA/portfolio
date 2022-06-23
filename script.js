const mainMediaButton = document.querySelector('.main_media_button');
const navMenu = document.querySelector('.nav-menu');

mainMediaButton.addEventListener('click', () => {
  mainMediaButton.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  mainMediaButton.classList.remove('active');
  navMenu.classList.remove('active');
}));
