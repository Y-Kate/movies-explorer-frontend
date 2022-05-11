import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Register.css';

function Register() {

  return (
    <section className="register">
      <Link to="/" className="register__link">
        <img src={logo} alt="Лого" className="register__logo" />
      </Link>
      <h2 className="register__title">Добро пожаловать!</h2>
      <form className="form-user">
        <label className="form-user__label">Имя</label>
        <input
          required
          name="name"
          id="name"
          placeholder="Имя"
          type="text"
          minLength="2"
          maxLength="30"
          className="form-user__input"
          />
        {/* <span className="form-user__error">Что-то пошло не так...</span> */}
        <label className="form-user__label">E-mail</label>
        <input
        required
        name="email"
        id="user-email"
        placeholder="E-mail"
        type="email"
        minLength="2"
        maxLength="30"
        className="form-user__input"
        />
        {/* <span className="form-user__error">Что-то пошло не так...</span> */}
        <label className="form-user__label">Пароль</label>
        <input
          required
          name="password"
          id="user-password"
          placeholder="Пароль"
          type="password"
          minLength="6"
          maxLength="30"
          className="form-user__input form-user__input_error"/>
        <span className="form-user__error">Что-то пошло не так...</span>
        <button className="form-user__button" type="submit">Зарегистрироваться</button>
        <p className="form-user__сaption"> Уже зарегистрированы? <a href="/sign-in" className="form-user__alredy">Войти</a>
        </p>
      </form>
    </section>
  );
}

export default Register;