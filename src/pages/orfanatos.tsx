import React from 'react';
import '../styles/orfanatos.css';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import {FiArrowLeft} from 'react-icons/fi';
import map from '../imagens/Local.svg';
import {Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function ofanatos() {
    return (
        <div id='page-map'>
            <aside>
                <header>
                    <img src={map} alt=""/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita</p>
                </header>

                <footer>
                    <strong>Santo Antônio de Jesus</strong>
                    <span> Bahia </span> 
                </footer>
            </aside>

            <Map 
                center={[-12.9654673,-39.2651694]}
                zoom={14}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </Map>
            <Link to="" className='create-orfanato'>
                <FiPlus size={32} color="#FFF"/>
            </Link>
            <Link to="/" className='voltar'>
                <FiArrowLeft size={32} color="#000"/>
            </Link>
        </div>
    );
  }
  
  export default ofanatos;