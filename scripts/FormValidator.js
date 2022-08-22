export class FormValidator {
  constructor(settings, formElement) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass =  settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._errorElementActive =  document.querySelector('popup__input-error_active');
    this._buttonSave = document.querySelector(".popup__save_elements"); 
  }

  _showInputError(inputElement, errorMessage)  {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorElementActive);
  }

  _hideInputError (inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorElementActive);
  errorElement.textContent = '';
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _toggleButtonState () {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", true);
      this._buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      this._buttonElement.removeAttribute("disabled");
      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  };
  
  _setEventListeners () {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState();
      });
    });
  };

  _hasInvalidInput () {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  };

  enableValidation () {
    this._toggleButtonState();
    this._setEventListeners();  
  };

  _resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
      });
    }
  
blockSaveButton () {
  this._buttonSave.setAttribute("disabled", true);
  this._buttonSave.classList.add(this._inactiveButtonClass);
}  


 }
