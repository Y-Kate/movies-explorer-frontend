import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { getCountToLoad, searchMovies } from '../../utils/utils';
import './Movies.css';

function Movies({ allMovies }) {
  const [errorText, setErrorText] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [countIndex, setCountIndex] = useState(1);
  const [renderFilmsArray, setRenderFilmsArray] = useState([]);
  const [foundMovies, setFoundMovies] = useState([]);

  const handleSearch = () => {
    if (searchValue.length === 0) {
      setErrorText('Нужно ввести ключевое слово');
      setRenderFilmsArray([]);
    } else {
      setCountIndex(1);
      setErrorText('');
      setFoundMovies(searchMovies(searchValue, isShortFilm, allMovies));
    }
  }

  useEffect(() => {
    setRenderFilmsArray(foundMovies.slice(0, getCountToLoad() * countIndex));
  }, [countIndex, foundMovies]);

  const handleClickButton = () => {
    setCountIndex(countIndex + 1);
  };

  return (
    <>
      <Header isMainPage={false}/>
      <div className="movies">
        <SearchForm 
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isShortFilm={isShortFilm}
          setIsShortFilm={setIsShortFilm}
        />
        {/* <Preloader /> */}
        <MoviesCardList>
          {renderFilmsArray.length > 0
            ? <>
                <ul className="movies-list__container">
                  {renderFilmsArray.map((film, i) => {
                    return <MoviesCard filmData={film} key={`film-${i}`}/>
                  })}
                </ul>
                {renderFilmsArray.length < foundMovies.length && <button type="button" className="movies-list__button" onClick={handleClickButton}>Ещё</button>}
              </>
            : errorText.length === 0 && <p className="movies-list__error">{errorText}</p>
          }
        </MoviesCardList>
      </div>
      <Footer/>
    </>
  );
}

export default Movies;