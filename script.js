'use strict';

const overlay = document.querySelector('.overlay');

// MENU MOBILE
////////////////////////////////////////////////
const mobileMenu = function () {
  const nav = document.querySelector('.header__navbar__menu');
  const btnMenu = document.querySelector('.btn__menu');

  const openOrCloseMenu = function () {
    nav.classList.toggle('show');
    btnMenu.classList.toggle('close');
    overlay.classList.toggle('hidden');
  };

  btnMenu.addEventListener('click', openOrCloseMenu);
  overlay.addEventListener('click', openOrCloseMenu);
};

// MODAL SUCCESS
///////////////////////////////////////////////
const modalSuccess = function () {
  const modal = document.querySelector('.modal__success');
  const btnGoIt = document.querySelector('.modal__success button');

  const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  overlay.addEventListener('click', closeModal);
  btnGoIt.addEventListener('click', closeModal);
};

const init = function () {
  mobileMenu();
  modalSuccess();
};

init();
