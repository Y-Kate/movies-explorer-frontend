import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './Movies.css';

function Movies() {

  return (
    <>
      <Header isMainPage={false}/>
      <div className="movies">
        <SearchForm />
        <MoviesCardList />
      </div>
      <Footer/>
    </>
  );
}

export default Movies;