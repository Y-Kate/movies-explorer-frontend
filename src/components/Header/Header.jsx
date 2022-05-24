import { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './Header.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Header({ isMainPage }) {
  const [bgColor, setBgColor] = useState('black');
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (isMainPage) setBgColor('blue')
  }, [isMainPage])
  

  return (
    <header className={`header header_bgcolor_${bgColor}`}>
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo"/>
      </Link>
      
        <div className="header__container">
          {!currentUser ? 
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