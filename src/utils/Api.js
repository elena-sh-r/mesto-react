class Api {
  constructor({url, token, cohortId}) {
    this._apiUrl = `${url}/v1/${cohortId}`;
    this._token = token;
  }

  getOwnerInfo() {
    return fetch(`${this._apiUrl}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
    .then(res => this._checkResponse(res));
  }

  setOwnerInfo(name, about) {
    return fetch(`${this._apiUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })  
    })
    .then(this._checkResponse);
  }

  getCards() {
    return fetch(`${this._apiUrl}/cards`, {
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse);
  }

  setCard(name, link) {
    return fetch(`${this._apiUrl}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._apiUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse);
  }

  setCardLike(id) {
    return fetch(`${this._apiUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse);
  }

  deleteCardLike(id) {
    return fetch(`${this._apiUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._checkResponse);
  }

  setAvatar(avatar) {
    return fetch(`${this._apiUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: avatar
      })
    })
    .then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new Api({
  address: 'https://mesto.nomoreparties.co',
  groupId: `cohort-21`,
  token: `dc0ca2fb-4ae3-45bf-a776-2cc27f547133`,
});

export default api;