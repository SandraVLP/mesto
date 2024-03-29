export default class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    // тут проверка ответа
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  setCards(data) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,

      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  getProfileData() {
    return fetch(`${this._baseUrl}users/me`, { headers: this._headers }).then(
      this._checkResponse
    );
  }

  setProfileData(data) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  changeAvatar(data) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link,
      }),
    }).then(this._checkResponse);
  }

  putLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  deleteLike(cardId) {
    return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  // другие методы работы с API
}
