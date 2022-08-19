import { openPopup, cardPopup } from './index.js';

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
    this._setEventListeners();
  
    this._element.querySelector(".element__title").textContent = this._name;
    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__image").alt = this._name;
    return this._element;

  }  

  _handleLikeButton() {
    this._likeButton.classList.toggle("element__heart_active");
  }

  _handleDeleteButton() {
    this._element.remove();

  } 

  _openFullImagePopup (e) {
    document.querySelector(".popup__image").src = e.target.src;
    document.querySelector(".popup__image").alt = e.target.alt;
    document.querySelector(".popup__image-title").textContent= e.target.alt;
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

