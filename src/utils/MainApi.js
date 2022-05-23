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
}

export const mainApi = new MainApi({
  // baseUrl: "https://api.katediplom.nomoredomains.xyz",
  baseUrl: "http://localhost:3001",
  headers: {
    'Content-Type': 'application/json',
  },
})