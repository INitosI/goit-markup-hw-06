const openBtn = document.querySelector('.burger');
const menu = document.querySelector('.mob-menu');
const closeBtn = document.querySelector('.mob-cls-btn');

function openMenu() {
  menu.classList.add('open');
  openBtn.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  menu.classList.remove('open');
  openBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
