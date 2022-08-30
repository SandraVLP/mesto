import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor({popupSelector, submitForm}) {
        super(popupSelector);
        this._submitForm = submitForm;
        this._form = this._popupSelector.querySelector(".popup__container");
    }

    _getInputValues () {
        this._inputList = this._form.querySelectorAll(".popup__input");
        this._formValue = {};
        this._inputList.forEach(input => {
            this._formValue[input.name] = input.value;
        });
        return this._formValue;
    }

    setEventListeners () {
        super.setEventListeners();
        this._form.setEventListener("submit", (e) => {
            e.preventDefault();
            this._submitForm(this._getInputValues());
        }) 

    }

    close () {
        super.close();
        this._form.reset();
    }

};