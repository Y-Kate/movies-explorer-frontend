import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './SavedMovies.css';

function SavedMovies({ isSaveMoviesPage }) {

  return (
    <>
      <Header isMainPage={false} />
      <div className="save-movies">
        <SearchForm />
        <MoviesCardList isSaveMoviesPage={true} />
      </div>
    </>
  );
}

export default SavedMovies;