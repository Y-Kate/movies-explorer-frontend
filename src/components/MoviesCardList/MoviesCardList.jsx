import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

function MoviesCardList() {

  return (
    <section className="movies-list">
      <ul className="movies-list__container">
        <MoviesCard />
      </ul>
      <button type="submit" className="movies-list__button">Ещё</button>
    </section>
  );
}

export default MoviesCardList;
