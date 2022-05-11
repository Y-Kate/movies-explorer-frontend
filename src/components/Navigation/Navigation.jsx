import React from 'react';
import { NavLink } from 'react-router-dom'
import account from '../../images/account.svg'
import './Navigation.css'


function Navigation() {

  return (
    <div className="navigation">
      <button className="navigation__burger-menu"></button>
      <div className="navigation__registered">
        <div className="navigation__links">
          <NavLink to="/movies" className="navigation__link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </NavLink>
        </div>
        <NavLink to="/profile" className="navigation__link-account">
          Аккаунт <img src={account} alt="Аккаунт" className="navigation__account-logo"/>
        </NavLink>
      </div>
    </div>
  );
}

export default Navigation;