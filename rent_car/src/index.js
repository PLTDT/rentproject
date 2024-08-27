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
import RentForm from './pages/RentForm';
import Pay from './components/pay';
import PaymentResult from './pages/PaymentResult';
import MemberInfoPage from './pages/MemberInfoPage';
import ServiceAddressPage from './pages/ServiceAddressPage';
import ServiceAddressPageIn from './pages/ServiceAddressPageIn';

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
            <Route path="/RentHistory" element={<PrivateRoute element={<RentForm />}/>} />
            <Route path="/Pay" element={<PrivateRoute element={<Pay />}/>} />
            <Route path="/paymentResult" element={<PrivateRoute element={<PaymentResult />}/>} />
            <Route path='/MemberInfoPage' element={<PrivateRoute element={<MemberInfoPage />}/>} />
            <Route path='/ServiceAddressPage' element={<ServiceAddressPage />} />
            <Route path='/ServiceAddressPageIn' element={<PrivateRoute element={<ServiceAddressPageIn />}/>} />
        </Routes>
    </Router>
);

reportWebVitals();


