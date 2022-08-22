import { openPopup, cardPopup, popupImage, popupImageTitle } from './index.js';

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
    }

  generateCard() {
    this._element = this._getTemplate();
    this._likeButton = this._element.querySelector('.element__heart');
    this._deleteButton = this._element.querySelector('.element__basket');
    this._elementImage = this._element.querySelector(".element__image");
    this._elementTitle = this._element.querySelector(".element__title");
    this._setEventListeners();
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    return this._element;

  }  

  _handleLikeButton() {
    this._likeButton.classList.toggle("element__heart_active");
  }

  _handleDeleteButton() {
    this._element.remove();
  } 

  _openFullImagePopup () {
    popupImage.src = this._elementImage.src;
    popupImage.alt = this._elementImage.alt;
    popupImageTitle.textContent = this._elementImage.alt;
    openPopup(cardPopup);
};


  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton()
      });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteButton()
      });
    
    this._elementImage.addEventListener("click", (e) => {
      this._openFullImagePopup(e)
  }); 
  }


}

