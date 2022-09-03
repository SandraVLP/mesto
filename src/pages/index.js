import "./index.css";
import { settings, cardContainer, popupContainer, buttonOpenEditProfilePopup, profileNameInput, profileInfoInput, buttonOpenAddCardPopup, items } from '../utils/constants.js';
import Section from '../components/Section.js';
import { renderCard } from "../utils/utils.js";

const defaultCardList = new Section({
  data: items,
  renderer: (item) => {
    const cardElement = renderCard(item);
    defaultCardList.addItem(cardElement);
  }
},
".cards"); 
defaultCardList.renderItems();

import FormValidator from "../components/FormValidator.js";
const profileValidate = new FormValidator(settings, popupContainer);
const cardValidate = new FormValidator(settings, cardContainer);

profileValidate.enableValidation();
cardValidate.enableValidation();


import PopupWithImage from "../components/PopupWithImage.js"
export const popupPreview = new PopupWithImage(".popup_element"); /* используется в utils.js */
popupPreview.setEventListeners();

import UserInfo from "../components/UserInfo.js";
const userInfo = new UserInfo({userNameSelector: ".profile__title", userAboutSelector: ".profile__subtitle"});

import PopupWithForm from "../components/PopupWithForm.js";

const profilePopup = new PopupWithForm(".popup_edit", (data) => {
    userInfo.setUserInfo(data);
    profilePopup.close();
  });
profilePopup.setEventListeners();

buttonOpenEditProfilePopup.addEventListener('click', () => {
    const profileInfo = userInfo.getUserInfo();
    profileNameInput.value = profileInfo.name; 
    profileInfoInput.value = profileInfo.about;
    profileValidate.resetValidation();
    profilePopup.open()
});

const imagePopup = new PopupWithForm(".popup_elements", (item) => {
    const newCard = renderCard(item);
    defaultCardList.addItem(newCard);
    cardValidate.resetValidation(); 
    imagePopup.close();
  })
  
  imagePopup.setEventListeners();
  buttonOpenAddCardPopup.addEventListener('click', () => {
    cardValidate.resetValidation();
    imagePopup.open()})