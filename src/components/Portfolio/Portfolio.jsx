import React from 'react';
import './Portfolio.css'

function Portfolio() {

  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__list-item">
            <a href="https://y-kate.github.io/how-to-learn/" className="portfolio__link" target="_blank" rel="noreferrer">
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__list-item">
            <a href="https://y-kate.github.io/russian-travel/" className="portfolio__link" target="_blank" rel="noreferrer">
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__list-item">
            <a href="https://github.com/Y-Kate/react-mesto-api-full" className="portfolio__link" target="_blank" rel="noreferrer">
              Одностраничное приложение
            </a>
          </li>
        </ul>
    </section>
  );
}

export default Portfolio;