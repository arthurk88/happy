import React from 'react';
import './styles/global.css';
import './styles/pages/landing.css';

import LogoImg from './imagens/Logo.svg';


function App() {
  return (
    <div id="page-landing">
      <div className='content-wrapper'>
        <img src={LogoImg} alt='Happy'/>

        <main>
          <h1>Leve felicidades para o mundo!</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className='location'>
          <strong>Santo Antônio de Jesus</strong>
          <span>Bahia</span>
        </div>

        <a href="#" className='enter-app'>
          {'->'}
        </a>
      </div>
    </div>
  );
}

export default App;
