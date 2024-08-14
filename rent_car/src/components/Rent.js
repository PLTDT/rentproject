import React from 'react';
import rent from '../styles/Rent.module.css';

const CarBookingForm = () => {
    return (
        <div className={rent.form_bg}>
            <div className={rent.container}>
                <form className={rent.booking_form}>
                    <h2 className={rent.form_title}>門市租車</h2>
                    <div className={rent.form_section} id="test">
                        <label htmlFor={rent.pickup_location}>取車地點</label>
                        <input type="text" className={rent.form_input} />
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="dropoff-location">還車地點</label>
                        <input type="text" className={rent.form_input} />
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="pickup-date">取車日期</label>
                        <input type="date" className={rent.form_date} />
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="dropoff-date">還車日期</label>
                        <input type="date" className={rent.form_date} />
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="car-type">訂購車型</label>
                        <select className={rent.form_ctype}>
                            <option value="">請選擇租借車型</option>
                            <option value="SUZUKI Vitara">SUZUKI Vitara</option>
                            <option value="HONDA H FIT HEV 1.5">
                                HONDA H FIT HEV 1.5
                            </option>
                            <option value="TOYOTA NEW VIOS 1.5">
                                TOYOTA NEW VIOS 1.5
                            </option>
                            <option value="NISSAN LIVINA">NISSAN LIVINA</option>
                        </select>
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="passenger-count">乘車人數</label>
                        <input type="number" className={rent.form_pcount} />
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="coupon-code">折價券號</label>
                        <input type="text" className={rent.form_ccode} />
                    </div>
                    <button className={rent.form_rbt} type="submit">
                        預訂好車
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CarBookingForm;
