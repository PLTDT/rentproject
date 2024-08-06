import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Header />
        <Navbar />
        <Login />
        <Footer />
    </React.StrictMode>,
);

reportWebVitals();
