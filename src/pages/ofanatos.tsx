import React from 'react';
// import '../styles/global.css';
// import '../styles/landing.css';
// import {FiArrowRight} from 'react-icons/fi';
// import LogoImg from '../imagens/Logo.svg';
import {Link} from 'react-router-dom';

function ofanatos() {
    return (
      <div id="page-landing">
        <div className='content-wrapper'>
            <h1>Teste2</h1><Link to='/'>voltar</Link>
        </div>
      </div>
    );
  }
  
  export default ofanatos;