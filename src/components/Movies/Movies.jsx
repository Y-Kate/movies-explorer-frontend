import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies() {

  return (
    <>
      <Header isMainPage={false}/>
      <div className="movies">
        <SearchForm />
        {/* <Preloader /> */}
        <MoviesCardList />
      </div>
      <Footer/>
    </>
  );
}

export default Movies;