const handleOriginalResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Что-то пошло не так: ${res.status}`);
};

class Api {
  constructor(options) {
    this._headers = options.headers;
    this._url = options.url;
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers
    })  
    .then(handleOriginalResponse)
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    })  
    .then(handleOriginalResponse)
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about 
      })
    })  
    .then(handleOriginalResponse)
  }

  createCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link 
      })
    })  
    .then(handleOriginalResponse)
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })  
    .then(handleOriginalResponse)
  }

  addLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this._headers,
    })  
    .then(handleOriginalResponse)
  }

  removeLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })  
    .then(handleOriginalResponse)
  }

  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    })  
    .then(handleOriginalResponse)
  }
}

const api = new Api ({
  headers: {
    authorization: 'faa09cc7-7270-48b0-804c-b072edafec63',
    'Content-Type': 'application/json'
  },
  url: 'https://mesto.nomoreparties.co/v1/cohort-17'
});

export default api;