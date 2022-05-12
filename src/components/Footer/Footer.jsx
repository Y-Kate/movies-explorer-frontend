import React from 'react';
import './Footer.css';

function Footer() {

  return (
    <footer className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__content">
        <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://github.com/Y-Kate" className="footer__link" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://ru-ru.facebook.com/" className="footer__link" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
        </ul>
        <p className="footer__copyright">&copy;2021 Kate_Y</p>
      </div>
    </footer>
  );
}

export default Footer;