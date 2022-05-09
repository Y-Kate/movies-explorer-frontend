import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Header.css'

function Header() {
  const [bgColor, setBgColor] = useState('black')
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') setBgColor('green')
  }, [])
  

  return (
    <header className={`header header_bgcolor_${bgColor}`}>
      <img src={logo} alt="Логотип" className="header__logo"/>
        <div className="header__container">
          <button className="header__button">Регистрация</button>
          <button className="header__button button-enter">Войти</button>
        </div>
    </header>
  );
}

export default Header;