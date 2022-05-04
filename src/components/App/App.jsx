import { Route, Switch } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className="page">
        Диплом о Себе
        <Header />
        <Switch>
          <Route
            exact 
            path="/"
            component={Main} >
          </Route>
          <Route path="/sign-in">
              Логин
          </Route>
          <Route path="/sign-up">
            Пароль
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
