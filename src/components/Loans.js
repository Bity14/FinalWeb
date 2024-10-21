import React, { useState } from 'react';
import './Loans.css';

const Loans = () => {
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');

  const handleLoanRequest = () => {
    alert(`Préstamo solicitado:
      Cuenta: ${account}
      Monto: ${amount}
      Plazo: ${term} meses`);
  };

  return (
    <div className="loans-container">
      <h2>Solicitudes de Préstamos</h2>

      <label>
        Cuenta desde donde se solicita el préstamo:
        <input
        className='loan-input'
          type="number"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
          placeholder="Ingresa la cuenta que te hará el préstamo"
          min="0"
        />
      </label>
      <br />

      <label>
        Monto del préstamo:
        <input
        className='loan-input'
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Ingresa el monto del préstamo"
          min="0"
        />
      </label>
      <br />

      <label>
        Plazo del préstamo (meses):
        <input
        className='loan-input'
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Ingresa el plazo en meses"
          min="1"
        />
      </label>
      <br />

      <button className='loan-button' onClick={handleLoanRequest}>Solicitar Préstamo</button>
    </div>
  );
};

export default Loans;
