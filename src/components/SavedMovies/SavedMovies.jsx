import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';

function SavedMovies({ isSaveMoviesPage }) {

  return (
    <>
      <Header isMainPage={false} />
      <div className="save-movies">
        <SearchForm />
        <MoviesCardList isSaveMoviesPage={true} />
      </div>
      <Footer/>
    </>
  );
}

export default SavedMovies;