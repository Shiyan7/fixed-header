const burger = document.querySelector('.burger');
const body = document.body;
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navClose = document.querySelector('.nav-close');
const header = document.querySelector('header');
const headerWidth = parseInt(getComputedStyle(header).height, 10);
const isHeaderFixed = false;

fixedHeader();

window.addEventListener('scroll', fixedHeader);

function fixedHeader(event) {
  if (!isHeaderFixed && headerWidth <= window.pageYOffset) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}


burger.addEventListener('click', () => {
    body.classList.toggle('lock');
    nav.classList.toggle('show');
    overlay.style.display = 'block'
});

overlay.addEventListener('click', () => {
    body.classList.remove('lock');
    nav.classList.remove('show');
    overlay.style.display = 'none'
});

navClose.addEventListener('click', () => {
    body.classList.remove('lock');
    nav.classList.remove('show');
    overlay.style.display = 'none'
});
