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
  const buttonSave = document.querySelector(".popup__save_elements");
  buttonSave.setAttribute("disabled", true);
  buttonSave.classList.add("popup__save_disabled");
}

initialCards.forEach(e => renderCard(e.name, e.link));



popupAddCard.addEventListener("submit", handleSubmitAddCardForm);



const formElement = document.querySelector(".popup__container");
const formInput = formElement.querySelector('.popup__input');


const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add('popup__input-error_active');
  };
  
  const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove('popup__input-error_active');
  // Очистим ошибку
  errorElement.textContent = '';

  };
  
  const isValid = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      // Если поле не проходит валидацию, покажем ошибку
      showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
      // Если проходит, скроем
      hideInputError(formElement, inputElement, settings);
    }
  };

  const toggleButtonState = (inputList, buttonElement, settings) => {
    // Если есть хотя бы один невалидный инпут
    if (hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.setAttribute("disabled", true);
      buttonElement.classList.add(settings.inactiveButtonClass);
    } else {
      // иначе сделай кнопку активной
      buttonElement.removeAttribute("disabled");
      buttonElement.classList.remove(settings.inactiveButtonClass);
    }
  }; 
   
  const setEventListeners = (formElement, settings) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, settings);
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        isValid(formElement, inputElement, settings);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
  };

  const enableValidation = (settings) => {

    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        hideInputError(formElement, inputElement, settings);
        // У каждой формы отменим стандартное поведение
        
      });
  
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      setEventListeners(formElement, settings);
    });
  };
  
  // Вызовем функцию
  enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_disabled',
    inputErrorClass: 'popup__input_error',
    errorClass: 'popup__error_visible'
  });



  
  function hasInvalidInput (inputList) {
    // проходим по этому массиву методом some
    return inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true
      // Обход массива прекратится и вся функция
      // hasInvalidInput вернёт true
  
      return !inputElement.validity.valid;
    })
  }; 

  function closeOnEsc(e) {
    if (e.key === 'Escape') {
        const popupOpened = document.querySelector(".popup_active");
        closePopup(popupOpened);
    };
}; 

function closePopup (popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener('keydown', closeOnEsc);        
};

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
cardContainer.reset();
openPopup(popupAddCard);
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

function createCard(item) {
  const card = new Card(item, "#cardTemplate");
  const cardElement = card.generateCard();
  return cardElement;
};

items.forEach((item) => {
  cards.append(createCard(item));
});



function handleSubmitAddCardForm (e) {
  e.preventDefault();
  const item = {  name: newCardTitleInput.value,
    link: newCardLinkInput.value,
  };
  cards.prepend((createCard(item)));
  profileValidate.blockSaveButton();
  closeAddCardPopup ();
}



popupAddCard.addEventListener("submit", handleSubmitAddCardForm);

