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
import { getConvertedMovies } from '../../utils/utils';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true); 
  const [currentUser, setCurrentUser] = useState({ name: "Имя пользователя"});
  const [allMovies, setAllMovies] = useState([]); 

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
