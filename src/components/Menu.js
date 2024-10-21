// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Menu.css';
import ImageCarousel from '../components/Carousel.js';

const Menu = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        const confirmation = window.confirm('¿Estás seguro de que deseas cerrar sesión?');
        if (confirmation) {
          alert('Gracias por visitarnos, ¡hasta pronto!');
          navigate('/');
        }
      };
  return (
    <div className="menu-container">
      <nav className="menu-nav">
        <div className="logo">
          <Link to="/menu">
            <img src={process.env.PUBLIC_URL + '/images/favicon.png'} alt="Bank Logo" className="logo-image" />
          </Link>
          <p>Esteban Quito</p>
        </div>
        <ul className="nav-menu">
          <li>
            <Link to="/transfer" className="nav-link">Transferencia</Link>
          </li>
          <li>
            <Link to="/details" className="nav-link">Detalles de la Cuenta</Link>
          </li>
          <li>
            <Link to="/reports" className="nav-link">Historial / Movimientos</Link>
          </li>
          <li>
            <Link to="/loans" className="nav-link">Préstamos</Link>
          </li>
          <li>
            <a  href="#!" onClick={handleLogout} className="nav-link">Cerrar Sesión</a>
          </li>

        </ul>
      </nav>

      <div className="menu-content">
        <h1>Bienvenido a tu panel bancario</h1>
        <p>Gestiona tus cuentas y realiza transacciones de forma segura y rápida.</p>

        <div className="menu-actions">
          <Link to="/transfer">
            <button className="menu-button">Transferir Dinero</button>
          </Link>
          <Link to="/details">
            <button className="menu-button">Ver Detalles de la Cuenta</button>
          </Link>
          <Link to="/loans">
            <button className="menu-button">Solicitar Préstamo</button>
          </Link>
          <Link to="/reports">
            <button className="menu-button">Ver Historial</button>
          </Link>
        </div>
      </div>

      <ImageCarousel />

    </div>
  );
};

export default Menu;
