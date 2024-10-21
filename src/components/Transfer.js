import React, { useState } from 'react';
import './Transfer.css'

const Transfer = () => {
  const [transferData, setTransferData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: '',
    transactionType: 'transfer', // 'transfer', 'deposit', 'withdraw'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransferData({
      ...transferData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para registrar la transacción, como llamar a una API.
    console.log('Transacción registrada:', transferData);
    // Resetear el formulario
    setTransferData({
      fromAccount: '',
      toAccount: '',
      amount: '',
      transactionType: 'transfer',
    });
  };

  return (
    <div className="transfer-container">
      <h2>Realizar Transacciones</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Desde la Cuenta: </label>
          <input
            type="text"
            id="fromAccount"
            name="fromAccount"
            value={transferData.fromAccount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Para la Cuenta: </label>
          <input
            type="text"
            id="toAccount"
            name="toAccount"
            value={transferData.toAccount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Monto: </label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={transferData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tipo de Transacción: </label>
          <select
            id="transactionType"
            name="transactionType"
            value={transferData.transactionType}
            onChange={handleChange}
          >
            <option value="transfer">Transferencia </option>
            <option value="deposit">Depósito</option>
            <option value="withdraw">Retiro</option>
          </select>
        </div>
        <button type="submit">Realizar Transacción</button>
      </form>
    </div>
  );
};

export default Transfer;
