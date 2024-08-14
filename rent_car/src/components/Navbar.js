import React from "react";
import nav from "../styles/Navbar.module.css";
const Navbar = () => {
    return (
        <nav className={nav.nav}>
            <ul>
                <li>線上繳款</li>
                <li>會員註冊</li>
                <li>會員登入</li>
            </ul>
        </nav>
    );
};

export default Navbar;
