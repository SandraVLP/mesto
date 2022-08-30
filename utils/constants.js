export const settings = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  };


const popupAddCard = document.querySelector(".popup_elements");

const popupEditProfile = document.querySelector(".popup_edit");
const popups = document.querySelectorAll(".popup");

const buttonOpenEditProfilePopup = document.querySelector(".profile__button-add");
const buttonOpenAddCardPopup = document.querySelector(".profile__button-edit");



const popupCloseButtons = document.querySelectorAll(".popup__close");
const buttonCloseEditProfile = document.querySelector(".popup__close-profile")
const buttonCloseAddImage = document.querySelector(".popup__close_elements");
const buttonCloseImage = document.querySelector(".popup__close_element");

const newCardTitleInput = document.querySelector(".popup__profile_title_elements");
const newCardLinkInput = document.querySelector(".popup__profile_subtitle_elements");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const profileNameInput = document.querySelector(".popup__profile_title");
const profileInfoInput = document.querySelector(".popup__profile_subtitle");
export const cards = document.querySelector('.cards');
export const cardContainer = document.querySelector(".popup__container_elements");
export const popupContainer = document.querySelector(".popup__container");
export const popupImage = document.querySelector(".popup__image"); 
export const popupImageTitle = document.querySelector(".popup__image-title");

import FormValidator from "../components/FormValidator.js"

export const profileValidate = new FormValidator(settings, popupContainer);
export const cardValidate = new FormValidator(settings, cardContainer);

export  const items = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  import Section from '../components/Section.js';
  import { renderCard } from "./utils.js";

  export const defaultCardList = new Section({
    data: items,
    renderer: (item) => {
      const cardElement = renderCard(item);
      defaultCardList.addItem(cardElement);
    }
  },
  cards); 


import PopupWithImage from "../components/PopupWithImage.js"
export const popupPreview = new PopupWithImage(".popup_element");

import UserInfo from "../components/UserInfo.js";
const userInfo = new UserInfo({userName: title, userAbout: subtitle});

import PopupWithForm from "../components/PopupWithForm.js";



const imagePopup = new PopupWithForm(".popup_elements", (item) => {
  const newCard = renderCard(item);
  defaultCardList.addItem(newCard);
  imagePopup.close();
})

imagePopup.setEventListeners();
buttonOpenAddCardPopup.addEventListener('click', () => {imagePopup.open()})

const profilePopup = new PopupWithForm(".popup_edit", (data) => {
  userInfo.setUserInfo(data);
  console.log(data);
  profilePopup.close();
});
profilePopup.setEventListeners();
buttonOpenEditProfilePopup.addEventListener('click', () => {
  const profileInfo = userInfo.getUserInfo();
  profileNameInput.value = profileInfo.name; 
  profileInfoInput.value = profileInfo.about;

  profilePopup.open()
});
