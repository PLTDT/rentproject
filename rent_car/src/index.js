import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import Section1 from './components/Section1';
import Cars from './cars';
import Backstage from './components/Backstage';
import Membership from './components/Membership';
import EmployeesInfo from './components/EmployeesInfo';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
      <Routes>
        <Route path="/backstage" element={<Backstage/>} />
        <Route path="/Membership" element={<Membership  />} />
        <Route path="/EmployeesInfo" element={<EmployeesInfo />} />
      </Routes>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
