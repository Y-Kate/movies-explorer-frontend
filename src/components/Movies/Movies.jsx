import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { getCountToLoad, handleIsShort, searchMovies } from '../../utils/utils';
import './Movies.css';

function Movies({ allMovies, isLoggedIn, handleLike, handleDislike, serverErrorMessage }) {
  const [errorText, setErrorText] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [countIndex, setCountIndex] = useState(1);
  const [renderFilmsArray, setRenderFilmsArray] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (isShort) => {
    if (searchValue.length === 0) {
      setErrorText('Нужно ввести ключевое слово');
      setRenderFilmsArray([]);
      localStorage.setItem('moviesFoundMovies', JSON.stringify([]));
    } else {
      setIsLoading(true);
      setCountIndex(1);
      setErrorText('');

      let foundFilms = allMovies;
      foundFilms = searchMovies(searchValue, foundFilms);
      foundFilms = handleIsShort(isShort, foundFilms);
      if (foundFilms.length === 0) setErrorText('Ничего не найдено');
      setFoundMovies(foundFilms);

      localStorage.setItem('moviesSearchValue', searchValue);
      localStorage.setItem('moviesIsShortFilm', isShort);
      localStorage.setItem('moviesFoundMovies', JSON.stringify(foundFilms));
      setTimeout(() => {
        setIsLoading(false);
      }, 1000) 
    }
  }

  const handleChangeIsShort = (isShort) => {
    handleSearch(isShort);
  }

  useEffect(() => {
    const renderFilms = foundMovies.slice(0, getCountToLoad() * countIndex);
    setRenderFilmsArray(renderFilms);
  }, [countIndex, foundMovies]);

  const handleClickButton = () => {
    setCountIndex(countIndex + 1);
  };

  useEffect(() => {
    setErrorText(serverErrorMessage)
  }, [serverErrorMessage])
  
  useEffect(() => {
    const moviesSearchValue = localStorage.getItem('moviesSearchValue');
    if (moviesSearchValue) setSearchValue(moviesSearchValue);
    else setSearchValue('');
    
    const moviesIsShortFilm = localStorage.getItem('moviesIsShortFilm');
    if (moviesIsShortFilm === 'true') setIsShortFilm(true);
    else setIsShortFilm(false);
    
    const moviesFoundMovies = localStorage.getItem('moviesFoundMovies');
    if (moviesFoundMovies) setFoundMovies(JSON.parse(moviesFoundMovies));
    else setFoundMovies([]);
  }, [])
  
  useEffect(() => {
    const moviesFoundMovies = localStorage.getItem('moviesFoundMovies');
    if (moviesFoundMovies) {
      const updatedFoundMovies = JSON.parse(moviesFoundMovies).map(movie => allMovies.find(updateMovie => updateMovie.movieId === movie.movieId));
      setFoundMovies(updatedFoundMovies);
    }
  }, [allMovies])
  
  

  return (
    <>
      <Header isMainPage={false} isLoggedIn={isLoggedIn}/>
      <div className="movies">
        <SearchForm 
          handleSearch={handleSearch}
          handleChangeIsShort={handleChangeIsShort}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
        />
        {isLoading 
          ? <Preloader />
          : <MoviesCardList>
              {renderFilmsArray.length > 0
                ? <>
                    <ul className="movies-list__container">
                      {renderFilmsArray.map((film, i) => {
                        return <MoviesCard 
                          filmData={film}
                          key={`film-${i}`}
                          handleLike={handleLike}
                          handleDislike={handleDislike}
                        />
                      })}
                    </ul>
                    {renderFilmsArray.length < foundMovies.length && <button type="button" className="movies-list__button" onClick={handleClickButton}>Ещё</button>}
                  </>
                : errorText.length !== 0 && <p className="movies-list__error">{errorText}</p>
              }
            </MoviesCardList>
        }
      </div>
      <Footer/>
    </>
  );
}

export default Movies;