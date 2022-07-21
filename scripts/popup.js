const popupAddCard = document.querySelector(".popup_elements");
const cardPopup = document.querySelector(".popup_element");
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
const fullWidthPopupImage = document.querySelector(".popup__image");
const fullWidthPopupTitle = document.querySelector(".popup__image-title");


function openPopup (popup) {
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

function openFullImagePopup (e) {
    openPopup(cardPopup);
    fullWidthPopupImage.src = e.target.src;
    fullWidthPopupImage.alt = e.target.alt;
    fullWidthPopupTitle.textContent= e.target.alt;
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



