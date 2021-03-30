const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navClose = document.querySelector('.nav-close');
const header = document.querySelector('.header');
const headerWidth = parseInt(getComputedStyle(header).height, 10);
const body = document.body;
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

const closeNav = () => {
    body.classList.remove('lock');
    nav.classList.remove('show');
    overlay.style.display = 'none';
}

const openNav = () => {
    body.classList.toggle('lock');
    nav.classList.toggle('show');
    overlay.style.display = 'block'
}

burger.addEventListener('click', () => {
    openNav();
});

overlay.addEventListener('click', () => {
    closeNav();
});

navClose.addEventListener('click', () => {
    closeNav();
});
