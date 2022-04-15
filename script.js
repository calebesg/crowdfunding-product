'use strict';

// MENU MOBILE
////////////////////////////////////////////////
const mobileMenu = function () {
  const nav = document.querySelector('.header__navbar__menu');
  const btnMenu = document.querySelector('.btn__menu');
  const overlay = document.querySelector('.hidden');

  const openOrCloseMenu = function () {
    nav.classList.toggle('show');
    btnMenu.classList.toggle('close');
    overlay.classList.toggle('hidden');
  };

  btnMenu.addEventListener('click', openOrCloseMenu);
  overlay.addEventListener('click', openOrCloseMenu);
};
mobileMenu();
