import { Card } from './card.js';

const settings = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_disabled',
  inputErrorClass: 'popup__input_error',
  errorClass: 'popup__error_visible'
};

import { FormValidator } from './FormValidator.js';

const popupAddCard = document.querySelector(".popup_elements");
export const cardPopup = document.querySelector(".popup_element");
const popupEditProfile = document.querySelector(".popup_edit");
const popups = document.querySelectorAll(".popup");

const buttonOpenEditProfilePopup = document.querySelector(".profile__button-add");
const buttonOpenAddCardPopup = document.querySelector(".profile__button-edit");
const imagePreview = document.querySelector(".element__image");

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




export function openPopup (popup) {
    document.addEventListener('keydown', closeOnEsc);
    popup.classList.add("popup_active");
};

function  openPopupEditProfile () {
    profileNameInput.value = title.textContent; 
    profileInfoInput.value = subtitle.textContent;
    openPopup(popupEditProfile);
  
};

function openAddCardPopup () {
    newCardTitleInput.value = newCardTitleInput.textContent;
    newCardLinkInput.value = newCardLinkInput.textContent;
    openPopup(popupAddCard);
};


function closePopup (popup) {
    popup.classList.remove("popup_active");
    document.removeEventListener('keydown', closeOnEsc);        
};

function  closePopupEditProfile () {
    closePopup(popupEditProfile); 
};

function closeAddCardPopup () {
    closePopup(popupAddCard);
};

function closeFullImagePopup (e) {
    closePopup(cardPopup);
};


function submitPopupEditProfile (event) {
    event.preventDefault();
    title.textContent = profileNameInput.value;
    subtitle.textContent = profileInfoInput.value;
    closePopupEditProfile ();  
};



buttonOpenEditProfilePopup.addEventListener("click", openPopupEditProfile);
buttonOpenAddCardPopup.addEventListener("click", openAddCardPopup);



popupEditProfile.addEventListener("submit", submitPopupEditProfile);

function closeOnEsc(e) {
    if (e.key === 'Escape') {
        const popupOpened = document.querySelector(".popup_active");
        closePopup(popupOpened);
    };
};   

popups.forEach((popup) => popup.addEventListener('click', (event) => {
    if(event.target === event.currentTarget) {
        closePopup(popup); 
    }
    if(event.target === buttonCloseImage) {
        closeFullImagePopup();
    }
    if(event.target === buttonCloseAddImage) {
        closeAddCardPopup();
    }
    if(event.target === buttonCloseEditProfile) {
        closePopupEditProfile();
    }
}));

const items = [
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

  items.forEach((item) => {
    const card = new Card(item, "#cardTemplate");
    const cardElement = card.generateCard();
  
    // Добавляем в DOM
    document.querySelector('.card').append(cardElement);
  });
  
  
  function handleSubmitAddCardForm (e) {
    e.preventDefault();
    
    const item = {  name: newCardTitleInput.value,
      link: newCardLinkInput.value,
  
    }
    const card = new Card(item, "#cardTemplate");
    const cardElement = card.generateCard();
    document.querySelector('.card').prepend(cardElement);
    closeAddCardPopup ();
    const buttonSave = document.querySelector(".popup__save_elements");
    buttonSave.setAttribute("disabled", true);
    buttonSave.classList.add("popup__save_disabled");
  }
  
  
  
  popupAddCard.addEventListener("submit", handleSubmitAddCardForm);



const cardValidate = new FormValidator(settings, document.querySelector(".popup__container"));
cardValidate.enableValidation();

const profileValidate = new FormValidator(settings, document.querySelector(".popup__container_elements"));
profileValidate.enableValidation();