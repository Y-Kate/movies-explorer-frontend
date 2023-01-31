import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import './SavedMovies.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { handleIsShort, searchMovies } from '../../utils/utils';

function SavedMovies({ isLoggedIn, savedMovies, handleDislike, serverErrorMessage }) {
  const [errorText, setErrorText] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [renderMovies, setRenderMovies] = useState([]);

  const handleSearch = (isShort) => {
    setErrorText("")
    let renderFilms = savedMovies;
    if (searchValue.length > 0) {
      renderFilms = searchMovies(searchValue, renderFilms);
    } 
    renderFilms = handleIsShort(isShort, renderFilms);
    if (renderFilms.length === 0) {
      setErrorText("Фильмы не найдены");
    } else {
      setRenderMovies(renderFilms);
    }
  }

  const handleChangeIsShort = (isShort) => {
    handleSearch(isShort);
  }

  useEffect(() => {
    if (savedMovies.length === 0) {
      setErrorText("Нет сохраненных фильмов")
    } else {
      setRenderMovies(savedMovies);
    }
  }, [savedMovies])

  useEffect(() => {
    setErrorText(serverErrorMessage)
  }, [serverErrorMessage])

  return (
    <>
      <Header isMainPage={false} isLoggedIn={isLoggedIn}/>
      <div className="save-movies">
        <SearchForm
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
          handleSearch={handleSearch}
          handleChangeIsShort={handleChangeIsShort}
        />
        <MoviesCardList>
          {errorText.length === 0 ?
            <ul className="movies-list__container">
              {renderMovies.map((film, i) => {
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