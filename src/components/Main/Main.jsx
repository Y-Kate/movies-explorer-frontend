import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import './Main.css'
import Header from '../Header/Header';

function Main() {

  return (
    <>
      <Header isMainPage={true}/>
      <div className="main">
        < Promo />
        < AboutProject />
        < Techs />
        < AboutMe />
        < Portfolio />
      </div>
    </>
  );
}

export default Main;
