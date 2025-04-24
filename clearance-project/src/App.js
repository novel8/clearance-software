
import React from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
//import LoginPage from './Login';
//import LoginPage from './LoginPage';
//import SupportPage from './Supportpage';
//import EmployeeDashboard from './EmployeeHomePage'; 
import './index.css'; // Ensure Tailwind is imported

const App = () => {
  return (
    <div className="App">
     <LandingPage/>
    </div> 

  );
};

export default App;