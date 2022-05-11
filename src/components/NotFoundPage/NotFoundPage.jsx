
import React from 'react';
import './NotFoundPage.css'


function NotFoundPage() {

  return (
    <section className="not-found-page">
      <div className="not-found-page__container">
        <p className="not-found-page__text">404</p>
        <h1 className="not-found-page__title">Страница не найдена</h1>
      </div>
      <button className="not-found-page__button-back">Назад</button>
    </section>
  )
}

export default NotFoundPage;