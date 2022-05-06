const popupOpnBtn = document.querySelector(".profile__button-add");
const popup = document.querySelector(".popup");
const popupClsBtn = document.querySelector(".popup__close");
const title = document.querySelector(".profile__title");
const subtitle = document.querySelector(".profile__subtitle");
const popupTitle = document.querySelector(".popup__profile_title");
const popupSubtitle = document.querySelector(".popup__profile_subtitle");
const popupSaveBtn = document.querySelector(".popup__save");

function openPopup () {

    popup.classList.add("popup_active");
    popupTitle.value = title.textContent;
    popupSubtitle.value = subtitle.textContent;

}

function closePopup () {
    popup.classList.remove("popup_active");
}

function submitPopup (event) {
    event.preventDefault();
    title.textContent = popupTitle.value;
    subtitle.textContent = popupSubtitle.value;
    closePopup ();
    
}

popupOpnBtn.addEventListener("click", openPopup);


popupClsBtn.addEventListener("click", closePopup);

popupSaveBtn.addEventListener("click", submitPopup);




