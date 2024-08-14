import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Rent from './pages/RentPage';
import HomePageIn from './pages/HomePageIn';
import AboutIn from './pages/AboutIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Rent" element={<Rent />} />
            <Route path="/HomePageIn" element={<HomePageIn />} />
            <Route path="/AboutIn" element={<AboutIn />} />
        </Routes>
    </Router>,
);

reportWebVitals();
