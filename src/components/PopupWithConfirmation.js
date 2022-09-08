import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, onConfirm) {
        super(popupSelector);
        this._confirmButton = this._popup.querySelector(".popup__save");
        this._onConfirm = onConfirm;
    }

    setEventListeners () {
        super.setEventListeners();
        this._confirmButton.addEventListener("click", (e) => {
            e.preventDefault();
            this._onConfirm(this._cardId); 
            this._card.delete();
            this.close();
        }) 
        
    }

    open(card, cardId) {
        this._card = card;
        this._cardId = cardId; 
        super.open();
    }
}