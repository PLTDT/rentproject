import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section1 from './components/Section1';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Section1 />
        <Footer />
    </React.StrictMode>,
);

reportWebVitals();
