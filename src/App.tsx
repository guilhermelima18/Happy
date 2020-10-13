import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';
import logoImg from './images/logo.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy"/>
        <main>
          <h1>Leve felicidade para o mundo.</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
      </div>
      <div className="location">
        <strong>Jaú, São Paulo</strong>
        <a href="#"><i className="fas fa-arrow-right"></i></a>
      </div>
    </div>
  );
}

export default App;
