import React from 'react';
import planet_words from '../../images/planet_words.svg';
import './Promo.css'

function Promo() {

  return (
    <div className="promo">
      <img src={planet_words} alt="Земля из слов WEB" className="promo__image"/>
      <h1 className="promo__title"> Учебный проект студента факультета Веб-разработки.</h1>
      <p className="promo__description"> Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      <a href="/#about-project" className="promo__link"> Узнать больше </a>
    </div>
  );
}

export default Promo;
