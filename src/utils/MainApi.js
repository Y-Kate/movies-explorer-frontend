class MainApi {
  constructor({ headers, baseUrl }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) return res.json()
    return Promise.reject(`Произошла ошибка: ${res.status}`)
  };

  register(data) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'post',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 409) {
        return Promise.reject(`Пользователь с таким E-mail уже существует`);
      }
      return Promise.reject(`Произошла ошибка: ${res.status}`);
    })
  };

  login(dataUser) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'post',
      headers: this._headers,
      body: JSON.stringify(dataUser)
    }).then((res) => {
      if (res.ok) return res.json();
      else if (res.status === 401) return Promise.reject(`Неправильная почта или пароль`);
      return Promise.reject(`Произошла ошибка: ${res.status}`);
    })
  }

  getUserData(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`
      },
    }).then(this._handleResponse)
  }
  
  getSavedMovies(token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`
      },
    }).then(this._handleResponse)
  }
  
  updateProfile(user, token) {
    return fetch(`${this._baseUrl}/users/me/`, {
      method: 'PATCH',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) return res.json()
      else if (res.status === 409) {
        return Promise.reject('Этот email уже используется другим пользователем');
      }
      return Promise.reject(`Произошла ошибка: ${res.status}`)
    })
  }

  postMovies(movie, token) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`
      },
      body: JSON.stringify(movie),
    }).then(this._handleResponse)
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        "Authorization" : `Bearer ${token}`
      },
    }).then(this._handleResponse)
  }
}

export const mainApi = new MainApi({
  baseUrl: "https://api.katediplom.nomoredomains.xyz",
  // baseUrl: "http://localhost:3001",
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
})