import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import About from './pages/About';
import RentPage from './pages/RentPage';
import HomePageIn from './pages/HomePageIn';
import AboutIn from './pages/AboutIn';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/HomePageIn" element={<PrivateRoute element={<HomePageIn />} />} />
            <Route path="/AboutIn" element={<PrivateRoute element={<AboutIn />} />} />
            <Route path="/Rent" element={<PrivateRoute element={<RentPage />} />} />
        </Routes>
    </Router>
);

reportWebVitals();


