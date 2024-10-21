  // src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Importar el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Esteban Quito</h1>
      <p className="home-slogan">Tu dinero seguro... aunque no lo tengas</p>

      <img
        className="home-image"
        src={process.env.PUBLIC_URL + '/images/favicon.png'}
        alt="Imagen del Banco"
      />

      <div className="home-buttons">
        <Link to="/register" className="home-button">
          Registrarse
        </Link>
        <Link to="/sign" className="home-button">
          Iniciar Sesión
        </Link>
      </div>
    </div>
  );
};

export default Home;
