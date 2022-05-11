import React from 'react';
import { NavLink } from 'react-router-dom'
import account from '../../images/account.svg'
import './Navigation.css'


function Navigation() {

  return (
    <div className="navigation">
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
        <NavLink to="/profile" className="header__link-account">
          Аккаунт <img src={account} alt="Аккаунт" className="header__account-logo"/>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;