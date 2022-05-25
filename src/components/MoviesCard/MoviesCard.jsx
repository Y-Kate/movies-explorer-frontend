import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import './MoviesCard.css';

function MoviesCard({ filmData, handleLike, handleDislike }) {
  const { pathname } = useLocation();
  
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
        {pathname === "/movies"
          ? <button 
              type="button" 
              className={`movies-card__like movies-card__like${filmData.isLiked ? '_active' : '_save'}`}
              aria-label="Нравится"
              onClick={filmData.isLiked ? () => handleDislike(filmData) : () => handleLike(filmData)}
            />
          : <button 
            type="button" 
            className="movies-card__like movies-card__like_close"
            aria-label="Не нравится"
            onClick={() => handleDislike(filmData)}
          />
        }
      </div>
      <hr className="movies-card__underline"/>
      <p className="movies-card__duration">{getTime(filmData.duration)}</p>
    </li>
  );
}

export default MoviesCard;