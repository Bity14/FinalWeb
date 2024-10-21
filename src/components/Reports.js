import React, { useState } from 'react';
import './Reports.css'

const Reports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  const financialData = {
    totalIncome: 25000,
    totalExpenses: 12000,
    pendingDebts: 8000,
  };

  const handleReportSelection = (reportType) => {
    setSelectedReport(reportType);
  };

  return (
    <div className="reports-container">
      <h2>Reportes Financieros</h2>
      
      <div className="button-group">
        <button onClick={() => handleReportSelection('income')}>Ingresos</button>
        <button onClick={() => handleReportSelection('expenses')}>Egresos</button>
        <button onClick={() => handleReportSelection('debts')}>Deudas</button>
      </div>

      <div className="financial-report">
        {selectedReport === 'income' && (
          <p><strong>Ingresos totales: </strong>${financialData.totalIncome}</p>
        )}
        {selectedReport === 'expenses' && (
          <p><strong>Egresos totales: </strong>${financialData.totalExpenses}</p>
        )}
        {selectedReport === 'debts' && (
          <p><strong>Deudas pendientes: </strong>${financialData.pendingDebts}</p>
        )}
      </div>
    </div>
  );
};

export default Reports;
