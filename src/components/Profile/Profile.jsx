import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/formValidator';
import { mainApi } from '../../utils/MainApi';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ handleLogout }) {
  const [currentValues, setCurrentValues] = useState({});
  const [submitMessage, setSubmitMessage] = useState('');
  const [isErrorSubmit, setIsErrorSubmit] = useState(false);
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

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const token = localStorage.getItem('jwt')
    mainApi.updateProfile(values, token)
      .then((res) => {
        setIsErrorSubmit(false);
        setSubmitMessage('Информация успешно изменена');
        setTimeout(() => {
          setSubmitMessage('');
        }, 2000)
        setCurrentValues(res.data)
      })
      .catch((err) => {
        setIsErrorSubmit(true);
        setSubmitMessage(err);
        setTimeout(() => {
          setSubmitMessage('');
        }, 2000)
      });
  }

  return (
    <>
      <Header isMainPage={false} />
      <section className="profile">
        <h2 className="profile__title">Привет, {currentUser.name}!</h2>
        <form className="profile-form" onSubmit={handleSubmit}>
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
          <span className={`profile__submit-message${isErrorSubmit ? ' profile__submit-message_error' : ''}`}>{submitMessage}</span>
          <button className="profile__button" type="submit" disabled={(currentValues.name === values.name && currentValues.email === values.email) || !isValid}>Редактировать</button>
          <button className="profile__logout" type="button" onClick={handleLogout}>Выйти из аккаунта</button>
        </form>
      </section>
    </>
  );
}

export default Profile;