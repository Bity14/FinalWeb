// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contraseña: '',
    numeroCuenta: '',
    tipo: 'Ahorros',
    saldo: '',
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
    navigate('/details', {state: formData});
  };

  return (
    <div className="register-container">
      <h2>Registrar Cuenta</h2>
      <p className="home-slogan">Ingresa los datos requeridos para registrarte en la página web</p>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
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
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Número de Cuenta (celular):</label>
          <input
            type="text"
            id="numeroCuenta"
            name="numeroCuenta"
            value={formData.numeroCuenta}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de Cuenta:</label>
          <select
            id="tipo"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          >
            <option value="Ahorros">Ahorros</option>
            <option value="Corriente">Corriente</option>
          </select>
        </div>

        <div className="form-group">
          <label>Saldo Inicial:</label>
          <input
            type="number"
            id="saldo"
            name="saldo"
            value={formData.saldo}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="register-button">Registrar</button>
      </form>
    </div>
  );
};

export default Register;

  