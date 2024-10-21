import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sign.css';

const Sign = () => {
  const [formData, setFormData] = useState({
    email: '',
    contraseña: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/menu');
  };

  return (
    <div className="sign-container">
      <h2>Iniciar Sesión</h2>
      <p className="home-slogan">Ingresa los campos requeridos con los mismos datos del registro</p>
      <form className="sign-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            placeholder="Ingresa tu contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="sign-button">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Sign;

  