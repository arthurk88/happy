import React from 'react';
import '../styles/global.css';
import '../styles/landing.css';
import {FiArrowRight} from 'react-icons/fi';
import LogoImg from '../imagens/Logo.svg';
import {Link} from 'react-router-dom';

function home() {
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
  
          <Link to="/ofanatos" className='enter-app'>
            <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/>
          </Link>
        </div>
      </div>
    );
  }
  
  export default home;