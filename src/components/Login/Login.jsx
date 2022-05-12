import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Login.css';

function Login() {

  return (
    <section className="login">
      {/* <Link to="/" className="login__link">
        <img src={logo} alt="Лого" className="login__logo" />
      </Link> */}
      <Link to="/" className="logo-link">
        <img src={logo} alt="Лого" className="logo-link__image" />
      </Link>
        {/* <h2 className="login__title">Рады видеть!</h2> */}
        <h2 className="form-title">Рады видеть!</h2>
      <form className="form-user">
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
        <span className="form-user__error"></span>
        <label className="form-user__label">Пароль</label>
        <input
          required
          name="password"
          id="user-password"
          type="password"
          minLength="6"
          maxLength="30"
          className="form-user__input form-user__input_error"/>
        <span className="form-user__error"></span>
        <button className="form-user__button" type="submit">Войти</button>
        <p className="form-user__сaption"> Еще не зарегистрированы? <a href="/signup" className="form-user__alredy">Регистрация</a>
        </p>
      </form>
    </section>
  );
}

export default Login;