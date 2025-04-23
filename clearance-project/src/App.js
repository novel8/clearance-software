
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import LandingPage from './LandingPage';
//import LoginPage from './Login';
//import LoginPage from './LoginPage';
import SupportPage from './Supportpage';
import EmployeeDashboard from './EmployeeHomePage'; 
import './index.css'; // Ensure Tailwind is imported

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<EmployeeDashboard/>} /> {/* Ensure this route exists */}
      <Route path="/support" element={<SupportPage />} /> {/* Add this line */}
      
    </Routes>
  </Router>

  );
};

export default App;