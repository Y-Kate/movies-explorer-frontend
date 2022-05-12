import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {

  return (
    <>
      <Header isMainPage={false} />
      <section className="profile">
        <h2 className="profile__title">Привет, Виталий!</h2>
        <form className="profile-form">
          <label className="profile__label">Имя
            <input
              name="name"
              id="name"
              value="Виталий"
              className="profile__input"
              />
          </label>
          <span className="profile__error"></span>
          <label className="profile__label">E-mail
            <input
            name="email"
            id="user-email"
            value="pochta@yandex.ru"
            className="profile__input"
            />
          </label>
          <span className="profile__error">Что-то пошло не так...</span>
          <button className="profile__button" type="submit">Редактировать</button>
          <Link to="/signin" className="profile__link">
            <p className="profile__сaption">Выйти из аккаунта</p>
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;