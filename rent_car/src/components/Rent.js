import React, { useState } from 'react';
import '../styles/Rent.css';

const CarBookingForm = () => {
    return (
        <div className="container">
            <form className="booking-form">
                <h2>門市租車</h2>
                <div className="form-section" id="test">
                    <label htmlFor="pickup-location">取車地點</label>
                    <input type="text" id="pickup-location" />
                </div>
                <div className="form-section">
                    <label htmlFor="dropoff-location">還車地點</label>
                    <input type="text" id="dropoff-location" />
                </div>
                <div className="form-section">
                    <label htmlFor="pickup-date">取車日期</label>
                    <input type="date" id="pickup-date" />
                </div>
                <div className="form-section">
                    <label htmlFor="dropoff-date">還車日期</label>
                    <input type="date" id="dropoff-date" />
                </div>
                <div className="form-section">
                    <label htmlFor="car-type">訂購車型</label>
                    <input type="text" id="car-type" />
                </div>
                <div className="form-section">
                    <label htmlFor="passenger-count">乘車人數</label>
                    <input type="number" id="passenger-count" />
                </div>
                <div className="form-section">
                    <label htmlFor="coupon-code">折價券號</label>
                    <input type="text" id="coupon-code" />
                </div>
                <button type="submit">預訂好車</button>
            </form>
        </div>
    );
};

export default CarBookingForm;
