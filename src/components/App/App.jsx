
import React, { useState} from 'react';
import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies';
import './App.css';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true); //TODO удалить
  const [currentUser, setCurrentUser] = useState({ name: "Имя пользователя"});

  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page">
        <Switch>
          <Route
            exact 
            path="/"
            component={Main} >
          </Route>
          <ProtectedRoute
            path="/movies"
            exact
            component={Movies}
            isLoggedIn={isLoggedIn} //TODO удалить тут все и в rotectedRoute
          />
          <Route path="/signin">
              Логин
          </Route>
          <Route path="/signup">
            Пароль
          </Route>
        </Switch>
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
