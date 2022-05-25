import { useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function SavedMovies({ isLoggedIn, savedMovies, setSavedMovies, handleDislike }) {
  const [errorText, setErrorText] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);

  return (
    <>
      <Header isMainPage={false} isLoggedIn={isLoggedIn}/>
      <div className="save-movies">
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
        />
        <MoviesCardList>
          {errorText.length === 0 ?
            <ul className="movies-list__container">
              {savedMovies.map((film, i) => {
                return <MoviesCard filmData={film} isSaveMoviesPage={true} key={`film-${i}`} handleDislike={handleDislike}/>
              })}
            </ul>
          : <p className="movies-list__error">{errorText}</p>
        }
        </MoviesCardList>
      </div>
      <Footer/>
    </>
  );
}

export default SavedMovies;