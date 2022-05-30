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
import { serverErrorText } from '../../utils/constants';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [currentUser, setCurrentUser] = useState({});
  const [allMovies, setAllMovies] = useState([]); 
  const [savedMovies, setSavedMovies] = useState([]);
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [serverErrorMessage, setServerErrorMessage] = useState('');

  const history = useHistory();

  function handleLogin(data) {
    setLoginErrorMessage('');
    mainApi
      .login(data)
      .then((data) => {
        setIsLoggedIn(true);
        getMainUserData();
        localStorage.setItem('jwt', data.token);
        history.push('/movies');
      })
      .catch((err) => {
        setLoginErrorMessage(err);
      });
  }

  // Получает все фильмы со стороннего api
  useEffect(() => {
    setServerErrorMessage('');
    moviesApi.getMovies()
      .then((moviesArr) => {
        setAllMovies(getConvertedMovies(moviesArr))
      })
      .catch((err) => {
        setServerErrorMessage(serverErrorText);
      });
  }, []);
  
  const getMainUserData = () => {
    setServerErrorMessage('');
    const token = localStorage.getItem('jwt');
    if (token) {
      Promise.all([mainApi.getUserData(token), mainApi.getSavedMovies(token)])
        .then(([user, userMovies]) => {
          setCurrentUser(user.data);
          const userFilms = userMovies.data.filter(m => m.owner === user.data._id)
          setSavedMovies(userFilms);
          setAllMoviesWithData(userFilms)
        })
        .catch((err) => {
          setServerErrorMessage(serverErrorText);
        });
    }
  };
  
  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    setCurrentUser({});
    history.push("/");
  }

  const handleLike = (filmData) => {
    const token = localStorage.getItem('jwt');
    delete filmData.isLiked;
    delete filmData._id;
    mainApi.postMovies(filmData, token)
      .then((res) => {
        const newSavedMovies = [
          ...savedMovies,
          res.data
        ];
        setSavedMovies(newSavedMovies);
        setAllMoviesWithData(newSavedMovies)
      })
      .catch((err) => {
        console.log('err', err);
      })
  };
  
  const handleDislike = (filmData) => {
    const token = localStorage.getItem('jwt');
    const id = filmData._id;
    mainApi.deleteMovie(id, token)
      .then((res) => {
        const newSavedMovies = savedMovies.filter(m => m._id !== filmData._id);
        setSavedMovies(newSavedMovies);
        setAllMoviesWithData(newSavedMovies)
      })
      .catch((err) => {
        console.log('err', err);
      })
  };

  const setAllMoviesWithData = (newSavedMovies) => {
    const allMoviesWithLikes = allMovies.map(m => {
      const isSaved = newSavedMovies.some(savedMovie => savedMovie.movieId === m.movieId);
      if (isSaved) { 
        m.isLiked = true
        m._id = newSavedMovies.find(movie => movie.movieId === m.movieId)._id;
      } else {
        m.isLiked = false;
        m._id = '';
      } 
      return m
    });
    setAllMovies(allMoviesWithLikes);
  };

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main isLoggedIn={isLoggedIn}/>
          </Route>
          <ProtectedRoute
            path="/movies"
            exact
            component={Movies}
            isLoggedIn={isLoggedIn}
            allMovies={allMovies}
            handleLike={handleLike}
            handleDislike={handleDislike}
            serverErrorMessage={serverErrorMessage}
          />
          <ProtectedRoute
            path="/saved-movies"
            exact
            component={SavedMovies}
            isLoggedIn={isLoggedIn}
            savedMovies={savedMovies}
            handleDislike={handleDislike}
            serverErrorMessage={serverErrorMessage}
          />
          <ProtectedRoute
            path="/profile"
            exact
            component={Profile}
            isLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
          />
          <Route exact path="/signin">
            <Login handleLogin={handleLogin} loginErrorMessage={loginErrorMessage}/>
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
