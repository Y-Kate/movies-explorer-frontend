import React from 'react';
import './MoviesCard.css';

function MoviesCard({ filmData, isSaveMoviesPage }) {

  const getTime = (duration) => {
    const hours = Math.floor(duration/60);
    const minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
  };
  
  return (
    <li className="movies-card">
      <a href={filmData.trailerLink} target="_blank" rel="noreferrer" className="movies-card__link">
        <img src={filmData.image} alt="Обложка фильма" className="movies-card__poster"/>
      </a>
      <div className="movies-card__description">
        <p className="movies-card__title">{filmData.nameRU}</p>
        {isSaveMoviesPage ?
          <>
            <button type="button" className="movies-card__like movies-card__like_close" aria-label="Нравится" ></button>
          </> :
          <>
            <button type="button" className={`movies-card__like movies-card__like${filmData.isLiked ? '_active' : '_save'}`} aria-label="Нравится" ></button>
          </>
        }
      </div>
      <hr className="movies-card__underline"/>
      <p className="movies-card__duration">{getTime(filmData.duration)}</p>
    </li>
  );
}

export default MoviesCard;