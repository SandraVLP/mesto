const cardTemplate = document.querySelector("#cardTemplate").content;
const cardsSection = document.querySelector(".card");
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

  const addLike = (e) => {
    e.target.classList.toggle("element__heart_active");
  };

  const deleteCard = (e) => {
    e.target.closest(".element").remove();
  };


const createCard = (name, link) => {
  const element = cardTemplate.querySelector(".element").cloneNode(true);
  const elementImage = element.querySelector(".element__image");
  element.querySelector(".element__title").textContent = name;
  elementImage.src = link;
  elementImage.alt = name;
  element.querySelector(".element__heart").addEventListener("click", addLike);
  element.querySelector(".element__basket").addEventListener("click", deleteCard);
  elementImage.addEventListener("click", openFullImagePopup);
  return element;
}; 

const renderCard = (name, link, toEnd) => {
  const elementCard = createCard(name, link);
  if (toEnd === true) {
    cardsSection.prepend(elementCard);
  }
  else {
    cardsSection.append(elementCard);
  }   
};



function handleSubmitAddCardForm (e) {
  e.preventDefault();
  const name = newCardTitleInput.value;
  const link = newCardLinkInput.value;
  renderCard(name, link, true);
  closeAddCardPopup ();

}

initialCards.forEach(e => renderCard(e.name, e.link));



popupAddCard.addEventListener("submit", handleSubmitAddCardForm);