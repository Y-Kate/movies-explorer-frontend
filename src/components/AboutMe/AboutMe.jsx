import React from 'react';
import avatar from '../../images/avatar.svg'
import './AboutMe.css'

function AboutMe() {

  return (
    <section className="about-me">
      <h2 className="main__title">Студент</h2>
      <div className="about-me__section">
        <img src={avatar} alt="Фото автора" className="about-me__photo" />
        <div className="about-me__info">
          <h3 className="about-me__title">Екатерина</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 37 лет</p>
          <p className="about-me__deckription">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <div className="about-me__social-links">
            <a href="https://www.facebook.com/" className="about-me__social-link" target="_blank" rel="noreferrer">FaceBook</a>
            <a href="https://github.com/Y-Kate" className="about-me__social-link" target="_blank" rel="noreferrer">Github</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;