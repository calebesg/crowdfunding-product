'use strict';

const nav = document.querySelector('.header__navbar__menu');
const btnMenu = document.querySelector('.btn__menu');

const openOrCloseMenu = function () {
  nav.classList.toggle('show');
  btnMenu.classList.toggle('close');
};

btnMenu.addEventListener('click', openOrCloseMenu);
