import React, { useState } from "react";
import pheader from "../styles/PageHeader.module.css";
import { Link } from "react-router-dom";
import Login from "./Login"; // 引入 Login 元件
import Register from "./Register"; // 引入 Register 元件

const PageHeader = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openLogin = () => {
        setShowLogin(true);
        setIsNavOpen(false); // 關閉漢堡選單
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    const openRegister = () => {
        setShowRegister(true);
        setIsNavOpen(false); // 關閉漢堡選單
    };

    const closeRegister = () => {
        setShowRegister(false);
    };

    const handleServiceClick = (event) => {
        event.preventDefault();
        alert("請先登入");
        setIsNavOpen(false); // 關閉漢堡選單
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // 切換漢堡選單狀態
    };

    // 點擊選單項目後自動關閉選單
    const handleNavItemClick = () => {
        setIsNavOpen(false);
    };

    return (
        <header className={pheader.header}>
            <div className={pheader.banner}>
                <a href="/HomePage">
                    <img
                        src={require("../assets/logo.png")}
                        alt="背景圖"
                        className={pheader.logo}
                    />
                </a>
                <div>
                    <button className={pheader.hamburger} onClick={toggleNav}>
                        <div className={pheader.line}></div>
                        <div className={pheader.line}></div>
                        <div className={pheader.line}></div>
                    </button>
                </div>
                <div className={pheader.navbar}>
                    <ul>
                        <li className={pheader.menu}>
                            <Link to="/HomePage" onClick={handleNavItemClick}>首頁</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/About" onClick={handleNavItemClick}>關於我們</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/Rent" onClick={handleServiceClick}>租車服務</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/CarMenu" onClick={handleNavItemClick}>車款介紹</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/ServiceAddressPage" onClick={handleNavItemClick}>服務據點</Link>
                        </li>
                    </ul>
                    <div className={pheader.signbtdiv}>
                        <div className={pheader.signdiv}>
                            <button
                                className={pheader.signbt}
                                onClick={openLogin}
                            >
                                <span className={pheader.sisp}></span>
                                登入
                            </button>
                        </div>
                        <div className={pheader.signdiv}>
                            <button
                                className={pheader.signbt}
                                onClick={openRegister}
                            >
                                <span className={pheader.sisp}></span>
                                註冊
                            </button>
                        </div>
                    </div>
                </div>
                <div className={pheader.hamcontainer}>
                    {isNavOpen ? (
                        <ul>
                            <li className={pheader.hammenu}>
                                <Link to="/HomePage" onClick={handleNavItemClick} className={pheader.hamlink}>首頁</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/About" onClick={handleNavItemClick} className={pheader.hamlink}>關於我們</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/Rent" onClick={handleServiceClick} className={pheader.hamlink}>租車服務</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/CarMenu" onClick={handleNavItemClick} className={pheader.hamlink}>車款介紹</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/ServiceAddressPage" onClick={handleNavItemClick} className={pheader.hamlink}>服務據點</Link>
                            </li>
                            <button className={pheader.hamsignbt} onClick={openLogin}>
                                登入
                            </button>
                            <button className={pheader.hamsignbt} onClick={openRegister}>
                                註冊
                            </button>
                        </ul>
                    ) : null}
                </div>
            </div>
            {showLogin && <Login closeLogin={closeLogin} />} {/* 顯示登入彈窗 */}
            {showRegister && <Register closeRegister={closeRegister} />} {/* 顯示註冊彈窗 */}
        </header>
    );
};

export default PageHeader;
