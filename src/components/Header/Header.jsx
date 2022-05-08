import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css'

function Header() {

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo"/>
        <div className="header__container">
          <button className="header__button">Регистрация</button>
          <button className="header__button button-enter">Войти</button>
        </div>
    </header>
  );
}

export default Header;