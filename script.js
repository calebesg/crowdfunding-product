'use strict';

const modalOverlay = document.querySelector('.modal__overlay');

// MENU MOBILE
////////////////////////////////////////////////
const mobileMenu = function () {
  const overlay = document.querySelector('.menu__overlay');
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
    modalOverlay.classList.add('hidden');
  };

  modalOverlay.addEventListener('click', closeModal);
  btnGoIt.addEventListener('click', closeModal);
};

// MODAL BACK THIS PROJECT
//////////////////////////////////////////////////
const modalBack = function () {
  const overlay = document.querySelector('.modal__overlay');
  const modal = document.querySelector('.modal__rewards');
  const btnProject = document.querySelector('.btn__project');

  const openModal = function () {
    modalOverlay.classList.remove('hidden');
    modal.classList.remove('hidden');
  };

  const closeModal = function () {
    modal.classList.add('hidden');
    modalOverlay.classList.add('hidden');
  };

  btnProject.addEventListener('click', openModal);
  overlay.addEventListener('click', closeModal);
};

const init = function () {
  mobileMenu();
  modalSuccess();
  modalBack();
};

init();
