import React, { useState, useEffect } from 'react';
import logo from '../../images/logo.svg';
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
            </>
          }
        </div>

    </header>
  );
}

export default Header;