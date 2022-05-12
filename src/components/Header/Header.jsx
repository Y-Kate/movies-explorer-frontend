import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ isMainPage }) {
  const [bgColor, setBgColor] = useState('black')

  useEffect(() => {
    if (isMainPage) setBgColor('blue')
  }, [isMainPage])
  

  return (
    <header className={`header header_bgcolor_${bgColor}`}>
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo"/>
      </Link>
      
        <div className="header__container">
          {isMainPage ? 
            <>
            <NavLink to="/signup" className="header__button">
              Регистрация
            </NavLink>
            <NavLink to="/signin" className="header__button button-enter">
              Войти
            </NavLink>
             </> :
            <>
              <Navigation/>
            </>
          }
        </div>

    </header>
  );
}

export default Header;