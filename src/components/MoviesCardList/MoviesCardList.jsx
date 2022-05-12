import React, { useEffect, useState } from 'react';
import { filmsArray } from '../../utils/mock';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList( { isSaveMoviesPage } ) {
  const [renderFilmsArray, setRenderFilmsArray] = useState([]);

  useEffect(() => {
    const windowSize = window.innerWidth;
    let array = [];
    if (windowSize > 1190) {
      array = filmsArray.slice(0, 16);
    } else if (windowSize > 619) {
      array = filmsArray.slice(0, 8);
    } else {
      array = filmsArray.slice(0, 5);
    };
    console.log('array', array);
    setRenderFilmsArray(array);
  }, [])
  

  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        {renderFilmsArray.map((film) => {
          return <MoviesCard filmData={film} isSaveMoviesPage={isSaveMoviesPage}/>
        })}
      </ul>
      <button type="submit" className="movies-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
