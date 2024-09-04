import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Backlogin from './components/backlogin';
import OrderInfoPage from './pages/OrderInfoPage';
import MembershipPage from './pages//MembershipPage';
import EmployeeInfoPage from './pages//EmployeeInfoPage';
import DashboardInfoPage from './pages//DashboardInfoPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Backlogin />} />
      <Route path="/DashboardInfoPage" element={<DashboardInfoPage />} />
      <Route path="/OrderInfoPage" element={<OrderInfoPage />} />
      <Route path="/MembershipPage" element={<MembershipPage />} />
      <Route path="/EmployeeInfoPage" element={<EmployeeInfoPage />} />
    </Routes>
  </Router>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
