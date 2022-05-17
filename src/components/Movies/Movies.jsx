import {  useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import './Movies.css';

function Movies({ allMovies }) {
  const [errorText, setErrorText] = useState('');

  const handleSearch = (searchValue, isShortFilm) => {
    if (searchValue.length === 0) setErrorText('Нужно ввести ключевое слово')
    else setErrorText('')
    
  }

  return (
    <>
      <Header isMainPage={false}/>
      <div className="movies">
        <SearchForm handleSearch={handleSearch}/>
        {/* <Preloader /> */}
        <MoviesCardList errorText={errorText} allMovies={allMovies}/>
      </div>
      <Footer/>
    </>
  );
}

export default Movies;