import React from 'react';
import './MoviesCard.css'

function MoviesCard({ filmData }) {
  
  return (
    <>
      <li className="movies-card">
        <a href={filmData.link} target="_blank" rel="noreferrer" className="movies-card__link">
          <img src={filmData.img} alt="Обложка фильма" className="movies-card__poster"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">{filmData.name}</p>
          <button type="button" className={`movies-card__like movies-card__like${filmData.isLiked ? '_active' : '_save'}`} aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration">{filmData.time}</p>
      </li>
      {/* <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="movies-card__link">
          <img src={kino2} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_active" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="movies-card__link">
          <img src={kino3} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_save" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="movies-card__link">
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
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="movies-card__link">
          <img src={kino} alt="Обложка фильма" className="movies-card__poster"/>
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_save" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="movies-card__link">
          <img src={kino2} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_active" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="movies-card__link">
          <img src={kino3} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_save" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li>
      <li className="movies-card">
        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="movies-card__link">
          <img src={kino} alt="Обложка фильма" className="movies-card__poster" />
        </a>
        <div className="movies-card__description">
          <p className="movies-card__title">Бег это свобода</p>
          <button type="button" className="movies-card__like movies-card__like_save" aria-label="Нравится" ></button>
        </div>
        <hr className="movies-card__underline"/>
        <p className="movies-card__duration"> 1ч 49м</p>
      </li> */}
    </>
  );
}

export default MoviesCard;