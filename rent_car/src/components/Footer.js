import React from 'react';
import '../styles/Footer.css';
const Footer = () => {
    return (
        <footer className="Footer">
            <p>
                <a href="/about">關於我們</a>
            </p>
            <p>
                電子郵件: <a href="mailto:info@example.com">info@example.com</a>
            </p>
            <p>
                <a href="https://www.facebook.com/yourfacebookpage">
                    Facebook 頁面
                </a>
            </p>
            <p>
                <a href="/contact">聯繫我們</a>
            </p>
        </footer>
    );
};

export default Footer;
