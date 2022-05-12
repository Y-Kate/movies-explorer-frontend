import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import account from '../../images/account.svg';
import './Navigation.css';


function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <button className="navigation__burger-menu" onClick={() => setIsOpen(true)}></button>
      <div className={`navigation__registered${isOpen ? " navigation__registered_opened" : ""}`}>
        <div className="navigation__overlay">
          <div className="navigation__links">
            <button className="navigation__burger-menu-close" onClick={() => setIsOpen(false)}></button>
            <NavLink exact  to="/" className="navigation__link navigation__link_desktop_hidden" activeClassName="navigation__link_active">
              Главная
            </NavLink>
            <NavLink to="/movies" className="navigation__link" activeClassName="navigation__link_active">
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className="navigation__link" activeClassName="navigation__link_active">
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink to="/profile" className="navigation__link-account" activeClassName="navigation__link_active">
            Аккаунт <img src={account} alt="Аккаунт" className="navigation__account-logo" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;