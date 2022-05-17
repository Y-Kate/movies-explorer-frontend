import { useEffect, useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import { moviesApi } from '../../utils/MoviesApi';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [currentUser, setCurrentUser] = useState({ name: "Имя пользователя"});
  const [allMovies, setAllMovies] = useState([]); 

  const getConvertedMovies = (allApiMovies) => {
    return allApiMovies.map(m => {
      return {
        country: m.country ? m.country : 'Страна неизвестна',
        director: m.director ? m.director : 'Режиссер неизвестен',
        duration: m.duration ? m.duration : 0,
        year: m.year ? Number(m.year) : 0,
        description: m.description ? m.description : 'Нет описания',
        image: m.image.url ? `https://api.nomoreparties.co${m.image.url}` : 'https://www.inform.kz/thumbs/radmin_news_2021_04_16_210416142953024e_w320_h240.jpg',
        trailerLink: m.trailerLink ? m.trailerLink : 'https://youtu.be/g-44-c0l-IY',
        thumbnail: m.image.formats.thumbnail.url ? `https://api.nomoreparties.co${m.image.formats.thumbnail.url}` : 'https://www.inform.kz/thumbs/radmin_news_2021_04_16_210416142953024e_w320_h240.jpg',
        movieId: m.id ? m.id : 0,
        nameRU: m.nameRU ? m.nameRU : 'Название фильма не указано',
        nameEN: m.nameEN ? m.nameEN : 'The name of the film is not specified',
      }
    })
  }

  useEffect(() => {
    moviesApi.getMovies()
      .then((moviesArr) => {
        setAllMovies(getConvertedMovies(moviesArr))
      })
      .catch((err) => {
        console.log(`Произошла ошибка при загрузке фильмов - ${err}`)
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            exact
            component={Movies}
            isLoggedIn={isLoggedIn}
            allMovies={allMovies}
          />
          <ProtectedRoute
            path="/saved-movies"
            exact
            component={SavedMovies}
            isLoggedIn={isLoggedIn} 
          />
          <ProtectedRoute
            path="/profile"
            exact
            component={Profile}
            isLoggedIn={isLoggedIn} 
          />
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
