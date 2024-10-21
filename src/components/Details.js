import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Details.css'

const Details = () => {
  const location = useLocation();
  const formData = location.state;

  if (!formData) {
    return (
        <div className='message-container'>
        <p className='message'>No hay datos disponibles. Por favor, regístrate primero.</p>
        <img src={process.env.PUBLIC_URL + '/images/message.png'} alt="message" className="message-image" />
        <Link to="/register">
            <button className="menu-button">Ir a Registrar</button>
        </Link>
        </div>
  )}

  return (
    <div className="account-details-container">
      <h2>Detalles de la Cuenta</h2>
      <ul>
        <li><strong>Nombre:</strong> {formData.nombre}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Número de Cuenta:</strong> {formData.numeroCuenta}</li>
        <li><strong>Tipo de Cuenta:</strong> {formData.tipo}</li>
        <li><strong>Saldo:</strong> ${formData.saldo}</li>
      </ul>
    </div>
  );
};

export default Details;
