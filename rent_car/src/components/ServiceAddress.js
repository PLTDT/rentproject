import React from 'react';
import serviceaddress from '../styles/ServiceAddress.module.css';

const ServiceAddress = () => {
    return (
        <div className={serviceaddress.serviceaddress}>
            <div className={serviceaddress.banner}>
                <div className={serviceaddress.content}>
                    <p>我們的服務地點</p>
                    <h1>趕快來吧!</h1>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.238137532969!2d121.5355123753763!3d25.025991277821536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa29c2124e41%3A0x4c5bf7354c52fabf!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5bu65ZyL5Y2X6Lev5LqM5q61MjMx6Jmf!5e0!3m2!1szh-TW!2stw!4v1724397352494!5m2!1szh-TW!2stw" 
                        className={serviceaddress.map}
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default ServiceAddress;
