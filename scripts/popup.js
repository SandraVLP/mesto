const popupAddCard = document.querySelector(".popup_elements");
const cardPopup = document.querySelector(".popup_element");
const popupEditProfile = document.querySelector(".popup_editprofile");
const popups = document.querySelectorAll(".popup");

const buttonOpenEditProfilePopup = document.querySelector(".profile__button-add");
const buttonOpenAddCardPopup = document.querySelector(".profile__button-edit");
const imagePreview = document.querySelector(".element__image");

const popupCloseButtons = document.querySelectorAll(".popup__close");
const buttonCloseEditProfile = document.querySelector(".popup__closeprofile")
const buttonCloseAddImage = document.querySelector(".popup__close_elements");
const buttonCloseImage = document.querySelector(".popup__close_element");

const newCardTitleInput = document.querySelector(".popup__profile_title_elements");
const newCardLinkInput = document.querySelector(".popup__profile_subtitle_elements");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const profileNameInput = document.querySelector(".popup__profile_title");
const profileInfoInput = document.querySelector(".popup__profile_subtitle");
const fullWidthPopupImage = document.querySelector(".popup__image");
const fullWidthPopupTitle = document.querySelector(".popup__image-title");


function openPopup (popup) {
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

function openFullImagePopup (e) {
    openPopup(cardPopup);
    fullWidthPopupImage.src = e.target.src;
    fullWidthPopupImage.alt = e.target.alt;
    fullWidthPopupTitle.textContent= e.target.alt;
};

function closePopup (popup) {
    popup.classList.remove("popup_active");    
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

buttonCloseEditProfile.addEventListener("click", closePopupEditProfile);
buttonCloseAddImage.addEventListener("click", closeAddCardPopup);
buttonCloseImage.addEventListener("click", closeFullImagePopup);


popupEditProfile.addEventListener("submit", submitPopupEditProfile);

