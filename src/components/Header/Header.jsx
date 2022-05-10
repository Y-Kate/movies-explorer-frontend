import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo.svg';
import account from '../../images/account.svg'
import './Header.css'

function Header({ isMainPage }) {
  const [bgColor, setBgColor] = useState('black')

  useEffect(() => {
    if (isMainPage) setBgColor('blue')
  }, [isMainPage])
  

  return (
    <header className={`header header_bgcolor_${bgColor}`}>
      <img src={logo} alt="Логотип" className="header__logo"/>
        <div className="header__container">
          {isMainPage ? 
            <>
              <button className="header__button">Регистрация</button>
              <button className="header__button button-enter">Войти</button>
            </> :
            <>
              <button className="header__burger-menu"></button>
              <div className="header__registered">
                <div className="header__navigation">
                  <NavLink to="/movies" className="header__link">
                    Фильмы
                  </NavLink>
                  <NavLink to="/saved-movies" className="header__link">
                    Сохранённые фильмы
                  </NavLink>
                </div>
                <button className="header__button-account">Аккаунт<img src={account} alt="Аккаунт" className="header__account-logo"/></button>
              </div>
            </>
          }
        </div>

    </header>
  );
}

export default Header;