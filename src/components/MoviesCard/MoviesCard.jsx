import React from 'react';
import kino from '../../images/kino.jpg'
import './MoviesCard.css'

function MoviesCard() {

  return (
    <>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={kino} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_save" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={kino} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_active" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={kino} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_save" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
          <img src={kino} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_save" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
    </>
  );
}

export default MoviesCard;