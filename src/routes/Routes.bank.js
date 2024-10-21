// src/routes/AppRoutes.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/Home.js'
import Register from '../components/Register.js'
import Sign from '../components/Sign.js';
import Menu from '../components/Menu.js';
import Details from '../components/Details.js';
import Transfer from '../components/Transfer.js';
import Loans from '../components/Loans.js';
import Reports from '../components/Reports.js';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/details" element={<Details />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;



