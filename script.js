'use strict';

const allReward = document.querySelectorAll(
  '.modal__rewards__rewards .card__reward'
);
const nav = document.querySelector('.header__navbar__menu');
const menuOverlay = document.querySelector('.overlay_menu');
const btnMenu = document.querySelector('.btn__menu');

const btnProject = document.querySelector('.btn__project');
const modalReward = document.querySelector('.modal__rewards');
const overlayRewards = document.querySelector('.overlay_rewards');
const rewardsContainer = document.querySelector('.modal__rewards__rewards');

const modalSuccess = document.querySelector('.modal__success');
const overlaySuccess = document.querySelector('.overlay_success');
const btnGoIt = document.querySelector('.modal__success button');
const rewardForms = document.querySelectorAll('.reward_form');

class App {
  constructor() {
    btnMenu.addEventListener('click', this._toggleVisibilityMobileMenu);
    menuOverlay.addEventListener('click', this._toggleVisibilityMobileMenu);

    btnProject.addEventListener('click', this._toggleVisibilyRewards);
    overlayRewards.addEventListener('click', this._toggleVisibilyRewards);
    rewardsContainer.addEventListener('click', this._setActiveReward);
    rewardsContainer.addEventListener(
      'click',
      this._showModalSuccess.bind(this)
    );

    btnGoIt.addEventListener('click', this._toggleVisibilitySuccess);

    document.querySelectorAll('.reward__option').forEach(el => {
      if (el.closest('.card__reward').classList.contains('disabled'))
        el.disabled = true;
    });
  }

  _toggleVisibilityMobileMenu() {
    nav.classList.toggle('show');
    btnMenu.classList.toggle('close');
    menuOverlay.classList.toggle('hidden');
  }

  _toggleVisibilyRewards() {
    overlayRewards.classList.toggle('hidden');
    modalReward.classList.toggle('hidden');
  }

  _setActiveReward(event) {
    if (event.target.classList.contains('reward__option') === false) return;

    const reward = event.target.closest('.card__reward');

    allReward.forEach(re => re.classList.remove('card__reward--active'));
    rewardForms.forEach(re => re.classList.add('form--hidden'));

    reward.classList.add('card__reward--active');
    reward.querySelector('.reward_form').classList.remove('form--hidden');
  }

  _showModalSuccess(event) {
    if (event.target.classList.contains('btn_reward_confirm') === false) return;
    this._toggleVisibilyRewards();
    this._toggleVisibilitySuccess();
  }

  _toggleVisibilitySuccess() {
    modalSuccess.classList.toggle('hidden');
    overlaySuccess.classList.toggle('hidden');
  }
}

const app = new App();
