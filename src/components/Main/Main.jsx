import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Main.css';

function Main({ isLoggedIn }) {

  return (
    <>
      <Header isMainPage={true} isLoggedIn={isLoggedIn}/>
      <div className="main">
        < Promo />
        < AboutProject />
        < Techs />
        < AboutMe />
        < Portfolio />
      </div>
      <Footer></Footer>
    </>
  );
}

export default Main;
