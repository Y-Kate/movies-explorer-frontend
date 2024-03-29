import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/formValidator';
import { mainApi } from '../../utils/MainApi';
import './Register.css';

function Register({ handleLogin, isLoggedIn }) {
  const { values, handleChange, errors, isValid, initRequiredFields } = useFormWithValidation();
  const [errorSubmit, setErrorSubmit] = useState('')
  const history = useHistory();

  useEffect(() => {
    initRequiredFields({
      name: '',
      email: '',
      password: ''
    })
  }, [initRequiredFields])

  const handleRegister = (evt) => {
    setErrorSubmit('');

    evt.preventDefault();
    mainApi.register(values)
      .then((data) => {
        handleLogin({ email: values.email, password: values.password });
      })  
      .catch((err) => {
        setErrorSubmit(err);
      })
  }

  useEffect(() => {
    if (isLoggedIn) history.push('/')
  }, [isLoggedIn])

  return (
    <section className="register">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Лого" className="logo-link__image" />
      </Link>
      <h2 className="form-title">Добро пожаловать!</h2>
      <form className="form-user" onSubmit={handleRegister}>
        <label className="form-user__label">Имя</label>
        <input
          required
          name="name"
          id="name"
          type="text"
          minLength="2"
          maxLength="30"
          className={`form-user__input ${errors.name ? 'form-user__input_error' : ''}`}
          values={values.name}
          onChange={handleChange}
          />
        <span className="form-user__error">{errors.name}</span>

        <label className="form-user__label">E-mail</label>
        <input
          required
          name="email"
          id="user-email"
          type="email"
          minLength="2"
          maxLength="30"
          className={`form-user__input ${errors.email ? 'form-user__input_error' : ''}`}
          values={values.email}
          onChange={handleChange}
        />
        <span className="form-user__error">{errors.email}</span>

        <label className="form-user__label">Пароль</label>
        <input
          required
          name="password"
          id="user-password"
          type="password"
          minLength="6"
          maxLength="30"
          className={`form-user__input ${errors.password ? 'form-user__input_error' : ''}`}
          values={values.password}
          onChange={handleChange}
        />
        <span className="form-user__error">{errors.password}</span>
        <span className="form-user__submit-error">{errorSubmit}</span>
        
        <button className="form-user__button-register" type="submit" disabled={!isValid}>Зарегистрироваться</button>
        <p className="form-user__сaption"> Уже зарегистрированы? <Link to="/signin" className="form-user__alredy">Войти</Link>
        </p>
      </form>
    </section>
  );
}

export default Register;