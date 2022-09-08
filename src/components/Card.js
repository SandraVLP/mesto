export default class Card {
  constructor(data, templateSelector, handleCardClick, handleDeleteClick, handleLikeClick, handleDeleteLike) {
    this._name = data.name;
    this._link = data.link;
    this._author = data.owner._id;
    this._cardId = data._id;
    this._likesCount = data.likes.length;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteLike = handleDeleteLike;
    this._canDelete = data.canDelete;
    this._iLike = data.iLike;
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
    this._likesCountElement = this._element.querySelector(".element__like-count");
    if (!this._canDelete) {
      this._deleteButton.setAttribute('hidden', 'hidden')
    };
    if (!this._iLike) {
      this._deleteLike();    
    }
    else {
      this._putLike();
    }
    this._setEventListeners();
    this._elementTitle.textContent = this._name;
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._likesCountElement.textContent = this._likesCount;
    return this._element;

  }  

 _putLike() {
    this._likeButton.classList.add("element__heart_active");
  }

  _deleteLike() {
    this._likeButton.classList.remove("element__heart_active");
  } 

  delete() {
    this._element.remove();
    this._element = null;
  } 


  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {    
      if (this._iLike) {
       this._handleDeleteLike(this._cardId, this);    
    }
    else {
      this._handleLikeClick(this._cardId, this)
    }
      });
    this._deleteButton.addEventListener("click", () => {
      this._handleDeleteClick(this);
    });
    
   this._elementImage.addEventListener("click", () => {
      this._handleCardClick() 
  }); 
  }

updateLikes(likes){
  this._likes = likes;
  this._likesCount = likes.length;
  this._likesCountElement.textContent = this._likesCount;
  this._iLike = !this._iLike;
  if (this._iLike) {
     this._putLike(); 
  }
  else {
    this._deleteLike(); 
  }}

}

