const elementTemplate = document.querySelector("#elementsTemplate").content;
const card = document.querySelector(".card");
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
      card.append(element);


});



  card.onclick = (e) => {
    const el = e.target;
      if (el.classList.contains("element__heart")) {
        el.classList.toggle("element__heart_active");
      } else if (el.classList.contains("element__image")) {
        const popupElement = document.querySelector(".popup_element");
        const popupElementImage = document.querySelector(".popup__image_element");
        const popupElementTitle = document.querySelector(".popup__title_element");
        popupElement.classList.add("popup_element_active");
       popupElementImage.src = e.target.src;
       popupElementTitle.textContent= e.target.alt;
    } else if (el.classList.contains("element__basket")) {
        e.target.closest(".element").remove();
      } else {
          return;
      }
    console.log(e.target);
}

const elementPopupClsBtn = document.querySelector(".popup__close_element")
function elementClosePopup () {
    const popupElement = document.querySelector(".popup_element");
        popupElement.classList.remove("popup_element_active");
}

elementPopupClsBtn.addEventListener("click", elementClosePopup);

const popupElementsOpnBtn = document.querySelector(".profile__button-edit");
const popupElements = document.querySelector(".popup_elements");
const popupElementsClsBtn = document.querySelector(".popup__close_elements");
const popupElementsTitle = document.querySelector(".popup__title_elements");
const popupElementsLink = document.querySelector(".popup__link_elements");
const popupMakeBtn = document.querySelector(".popup__save_elements");


function openElementsPopup () {

    popupElements.classList.add("popup_elements_active");
    popupElementsTitle.value = `Название`;
    popupElementsLink.value = `Ссылка на картинку`;

}

function closeElementsPopup () {
    popupElements.classList.remove("popup_elements_active");
}

popupElementsOpnBtn.addEventListener("click", openElementsPopup);

popupElementsClsBtn.addEventListener("click", closeElementsPopup);


function addNewElement (e) {
    e.preventDefault();
    const element = elementTemplate.querySelector(".element").cloneNode(true);
    element.querySelector(".element__title").textContent = popupElementsTitle.value;
    element.querySelector(".element__image").src = popupElementsLink.value;
    card.prepend(element);
    closeElementsPopup ();

}

popupMakeBtn.addEventListener("click", addNewElement);

