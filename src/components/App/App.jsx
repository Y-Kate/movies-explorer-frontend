import { useEffect, useState} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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
import { mainApi } from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]); 
  const history = useHistory();

  function handleLogin(data) {
    mainApi
      .login(data)
      .then((data) => {
        setIsLoggedIn(true);
        localStorage.setItem('jwt', data.token);
        history.push('/movies');
      })
      .catch((err) => {
        console.log('err', err.message);
      });
  }

  // Получает все фильмы со стороннего api
  useEffect(() => {
    moviesApi.getMovies()
      .then((moviesArr) => {
        setAllMovies(getConvertedMovies(moviesArr))
      })
      .catch((err) => {
        console.log(`Произошла ошибка при загрузке фильмов - ${err}`)
      });
  }, []);
  
  useEffect(() => {
    const token = localStorage.getItem('jwt')
    Promise.all([mainApi.getUserData(token), mainApi.getSavedMovies(token)])
      .then(([user, userMovies]) => {
        // TODO userMovies
        setCurrentUser(user.data);
      })
      .catch((err) => {
        console.log(`Произошла ошибка ${err}`);
      });
  }, [isLoggedIn]);

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
            <Login handleLogin={handleLogin} />
          </Route>
          <Route exact path="/signup">
            <Register handleLogin={handleLogin}/>
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
