const addCardPopup = document.querySelector(".popup_elements");
const cardPopup = document.querySelector(".popup_element");
const EditProfilePopup = document.querySelector(".popup_editprofile");
const popups = document.querySelectorAll(".popup");

const openEditProfileButton = document.querySelector(".profile__button-add");
const openAddCardButton = document.querySelector(".profile__button-edit");
const imagePreview = document.querySelector(".element__image");

const popupClsBtns = document.querySelectorAll(".popup__close");

const popupElementsTitle = document.querySelector(".popup__profile_title_elements");
const popupElementsLink = document.querySelector(".popup__profile_subtitle_elements");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const popupTitle = document.querySelector(".popup__profile_title");
const popupSubtitle = document.querySelector(".popup__profile_subtitle");
const popupElementImage = document.querySelector(".popup__image");
const popupElementTitle = document.querySelector(".popup__image-title");

const popupSaveBtn = document.querySelector(".popup__save");

function openPopup (popup) {
    popup.classList.add("popup_active");
};

function  openEditProfilePopup () {
    openPopup(EditProfilePopup);
    popupTitle.value = title.textContent;
    popupSubtitle.value = subtitle.textContent;
};

function openAddCardPopup () {
    openPopup(addCardPopup);
    popupElementsTitle.value = `Название`;
    popupElementsLink.value = `Ссылка на картинку`;
};

function openFullImagePopup (e) {
    openPopup(cardPopup);
    popupElementImage.src = e.target.src;
    popupElementImage.alt = e.target.alt;
    popupElementTitle.textContent= e.target.alt;
};

function closePopup () {
    popups.forEach((popup) => {
        popup.classList.remove("popup_active");    
    })   
};


function submitEditProfilePopup (event) {
    event.preventDefault();
    title.textContent = popupTitle.value;
    subtitle.textContent = popupSubtitle.value;
    closePopup ();  
};


openEditProfileButton.addEventListener("click", openEditProfilePopup);
openAddCardButton.addEventListener("click", openAddCardPopup);

popupClsBtns.forEach((button) => {
    button.addEventListener("click", closePopup);
}); 

popupSaveBtn.addEventListener("click", submitEditProfilePopup);

