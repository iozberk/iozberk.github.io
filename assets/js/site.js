/* Shared mobile hamburger menu — used on every page */
function toggleMenu() {
  const open = document.getElementById('mobileMenu').classList.toggle('open');
  const bd = document.getElementById('menuBackdrop');
  const hb = document.getElementById('navHamburger');
  if (bd) bd.classList.toggle('open', open);
  if (hb) hb.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  const bd = document.getElementById('menuBackdrop');
  const hb = document.getElementById('navHamburger');
  if (bd) bd.classList.remove('open');
  if (hb) hb.classList.remove('open');
  document.body.style.overflow = '';
}
