import React, { useEffect, useState } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList( { isSaveMoviesPage, errorText, allMovies } ) {
  const [renderFilmsArray, setRenderFilmsArray] = useState([]);
  const [countIndex, setCountIndex] = useState(1);

  useEffect(() => {
    if (!isSaveMoviesPage) {
      const windowSize = window.innerWidth;
      let array = [];
      if (windowSize > 1190) {
        array = allMovies.slice(0, 16 * countIndex);
      } else if (windowSize > 619) {
        array = allMovies.slice(0, 8 * countIndex);
      } else {
        array = allMovies.slice(0, 5 * countIndex);
      };
      setRenderFilmsArray(array);
    } else {
      setRenderFilmsArray(allMovies);
    }
  }, [countIndex, allMovies, isSaveMoviesPage])

  const handleClickButton = () => {
    setCountIndex(countIndex + 1);
  }

  return (
    <section className="movies-list">
      {errorText.length === 0 ?
        <ul className="movies-list__container">
          {renderFilmsArray.map((film, i) => {
            return <MoviesCard filmData={film} isSaveMoviesPage={isSaveMoviesPage} key={`film-${i}`}/>
          })}
        </ul> :
        <p className="movies-list__error">{errorText}</p>
      }
      {!isSaveMoviesPage && renderFilmsArray.length < allMovies.length && <button type="button" className="movies-list__button" onClick={handleClickButton}>Ещё</button>}
    </section>
  );
}

export default MoviesCardList;
