import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import './Movies.css';

function Movies() {

  return (
    <>
      <Header isMainPage={false}/>
      <div className="movies">
        <SearchForm />
        <MoviesCardList />
      </div>
    </>
  );
}

export default Movies;