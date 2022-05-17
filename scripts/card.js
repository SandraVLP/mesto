const elementTemplate = document.querySelector("#elementsTemplate").content;
const elements = document.querySelector(".elements");
const initialCards = [
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



  initialCards.forEach((item) => {
      const element = elementTemplate.querySelector(".element").cloneNode(true);
      element.querySelector(".element__title").textContent = item.name;
      element.querySelector(".element__image").src = item.link;
      element.querySelector(".element__image").alt = item.name;
      elements.append(element);


});



  elements.onclick = (e) => {
    const el = e.target;
      if (el.classList.contains("element__heart")) {
        el.classList.toggle("element__heart_active");
      } else if (el.classList.contains("element__image")) {
        const popupElement = document.querySelector(".element_popup");
        const popupElementImage = document.querySelector(".element__image_popup");
        const popupElementTitle = document.querySelector(".element__title_popup");
        popupElement.classList.add("element_popup_active");
       popupElementImage.src = e.target.src;
       popupElementTitle.textContent= e.target.alt;
    } else if (el.classList.contains("element__basket")) {
        e.target.closest(".element").remove();
      } else {
          return;
      }
    console.log(e.target);
}

const elementPopupClsBtn = document.querySelector(".element__close_popup")
function elementClosePopup () {
    const popupElement = document.querySelector(".element_popup");
        popupElement.classList.remove("element_popup_active");
}

elementPopupClsBtn.addEventListener("click", elementClosePopup);

const popupElementsOpnBtn = document.querySelector(".profile__button-edit");
const popupElements = document.querySelector(".elements_popup");
const popupElementsClsBtn = document.querySelector(".elements__close_popup");
const popupElementsTitle = document.querySelector(".elements__title_popup");
const popupElementsLink = document.querySelector(".elements__link_popup");
const popupMakeBtn = document.querySelector(".elements__save_popup");


function openElementsPopup () {

    popupElements.classList.add("elements_popup_active");
    popupElementsTitle.value = `Название`;
    popupElementsLink.value = `Ссылка на картинку`;

}

function closeElementsPopup () {
    popupElements.classList.remove("elements_popup_active");
}

popupElementsOpnBtn.addEventListener("click", openElementsPopup);

popupElementsClsBtn.addEventListener("click", closeElementsPopup);


function addNewElement (e) {
    e.preventDefault();
    const element = elementTemplate.querySelector(".element").cloneNode(true);
    element.querySelector(".element__title").textContent = popupElementsTitle.value;
    element.querySelector(".element__image").src = popupElementsLink.value;
    elements.prepend(element);
    closeElementsPopup ();

}

popupMakeBtn.addEventListener("click", addNewElement);



  