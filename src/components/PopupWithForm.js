import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector(".popup__container");
        this._inputList = this._form.querySelectorAll(".popup__input");
        this._buttonSave = this._popup.querySelector(".popup__save"); 
    }

    _getInputValues () {
        
        this._formValue = {};
        this._inputList.forEach(input => {
            this._formValue[input.id] = input.value;
        });
        return this._formValue;
    }

    setEventListeners () {
        super.setEventListeners();
        this._form.addEventListener("submit", (e) => {
            e.preventDefault();
            this._submitForm(this._getInputValues());
            this._buttonSave.setAttribute("disabled", true);
            this._buttonSave.classList.add('popup__save_disabled');

        }) 

    }

    close () {
        this._form.reset();
        super.close();
    }

};