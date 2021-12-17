const hamburger = document.querySelector('.hamburger-wrapper');
const header = document.querySelector('header');
const html = document.querySelector('html');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('change');
  header.classList.toggle('is-open');
  html.classList.toggle('no-scroll');
});