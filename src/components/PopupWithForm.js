import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector(".popup__container");
        this._inputList = this._form.querySelectorAll(".popup__input");
        this._submitButton = this._form.querySelector(".popup__save"); 
        this._buttonText = this._submitButton.textContent;
    }

    _getInputValues () {
        
        this._formValue = {};
        this._inputList.forEach(input => {
            this._formValue[input.name] = input.value;
        });
        return this._formValue;
    }

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submitForm(this._getInputValues(), this);
        }) 

    }

    renderLoading(isLoading) {
        if (isLoading) {
          // добавьте классы, как сказано в задании
          this._submitButton.textContent = this._buttonText + `...`;
        } else {
            this._submitButton.textContent = this._buttonText;
        }
      }

    close () {
        this._form.reset();
        super.close();
    }

};