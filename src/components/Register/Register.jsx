import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Register.css';

function Register() {

  return (
    <section className="register">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Лого" className="logo-link__image" />
      </Link>
      <h2 className="form-title">Добро пожаловать!</h2>
      <form className="form-user">
        <label className="form-user__label">Имя</label>
        <input
          required
          name="name"
          id="name"
          type="text"
          minLength="2"
          maxLength="30"
          className="form-user__input"
          />
        <span className="form-user__error">Что-то пошло не так...</span>

        <label className="form-user__label">E-mail</label>
        <input
        required
        name="email"
        id="user-email"
        type="email"
        minLength="2"
        maxLength="30"
        className="form-user__input"
        />
        <span className="form-user__error">Что-то пошло не так...</span>

        <label className="form-user__label">Пароль</label>
        <input
          required
          name="password"
          id="user-password"
          type="password"
          minLength="6"
          maxLength="30"
          className="form-user__input form-user__input_error"/>
        <span className="form-user__error">Что-то пошло не так...</span>
        
        <button className="form-user__button-register" type="submit">Зарегистрироваться</button>
        <p className="form-user__сaption"> Уже зарегистрированы? <a href="/signin" className="form-user__alredy">Войти</a>
        </p>
      </form>
    </section>
  );
}

export default Register;