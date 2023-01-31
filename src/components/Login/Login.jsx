import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormWithValidation } from '../../utils/formValidator';
import './Login.css';

function Login({ handleLogin, loginErrorMessage, isLoggedIn }) {
  const { values, handleChange, errors, isValid, initRequiredFields } = useFormWithValidation();
  const history = useHistory();

  useEffect(() => {
    initRequiredFields({
      email: '',
      password: ''
    })
  }, [initRequiredFields]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin(values);
  }

  useEffect(() => {
    if (isLoggedIn) history.push('/')
  }, [isLoggedIn])

  return (
    <section className="login">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Лого" className="logo-link__image" />
      </Link>
      <h2 className="form-title">Рады видеть!</h2>
      <form className="form-user" onSubmit={handleSubmit}>
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
        <span className="form-user__submit-error">{loginErrorMessage}</span>

        <button className="form-user__button" type="submit" disabled={!isValid}>Войти</button>
        <p className="form-user__сaption"> Еще не зарегистрированы? <Link to="/signup" className="form-user__alredy">Регистрация</Link>
        </p>
      </form>
    </section>
  );
}

export default Login;