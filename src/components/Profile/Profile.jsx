import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/formValidator';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
  const [currentValues, setCurrentValues] = useState({})
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

  useEffect(() => {
    const curValues = {
      name: currentUser.name,
      email: currentUser.email,
    };
    setValues(curValues);
    setCurrentValues(curValues);
  }, [currentUser, setValues])

  return (
    <>
      <Header isMainPage={false} />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile-form">
          <label className="profile__label">Имя
            <input
              name="name"
              id="name"
              value={values.name || ''}
              className="profile__input"
              onChange={handleChange}
              minLength="2"
              maxLength="30"
            />
          </label>
          <span className="profile__error">{errors.name}</span>
          <label className="profile__label">E-mail
            <input
              name="email"
              id="user-email"
              value={values.email || ''}
              className="profile__input"
              onChange={handleChange}
            />
          </label>
          <span className="profile__error">{errors.email}</span>
          <button className="profile__button" type="submit" disabled={(currentValues.name === values.name && currentValues.email === values.email) || !isValid}>Редактировать</button>
          <Link to="/signin" className="profile__link">
            <p className="profile__сaption">Выйти из аккаунта</p>
          </Link>
        </form>
      </section>
    </>
  );
}

export default Profile;