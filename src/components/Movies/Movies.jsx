import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

function Movies() {

  return (
    <>
      <Header isMainPage={false}/>
      <div className="movies">
        <SearchForm />
      </div>
    </>
  );
}

export default Movies;