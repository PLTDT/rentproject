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
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    const openRegister = () => {
        setShowRegister(true);
    };

    const closeRegister = () => {
        setShowRegister(false);
    };

    const handleServiceClick = (event) => {
        // 阻止默認的連結行為
        event.preventDefault();
        // 使用 alert 來提示用戶
        alert("請先登入");
    };
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // 切換漢堡選單狀態
        console.log("isNavOpen:", !isNavOpen); // Check state changes
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
                                <Link to="/HomePage">首頁</Link>
                            </li>
                            <li className={pheader.menu}>
                                <Link to="/About">關於我們</Link>
                            </li>
                            <li className={pheader.menu}>
                                <Link to="/Rent" onClick={handleServiceClick}>租車服務</Link>
                            </li>
                            <li className={pheader.menu}>
                                <Link to="/CarMenu">車款介紹</Link>
                            </li>
                            <li className={pheader.menu}>
                                <Link to="/ServiceAddressPage">服務據點</Link>
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
                                        <Link to="/HomePage" className={pheader.hamlink}>首頁</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/About" className={pheader.hamlink}>關於我們</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/Rent" onClick={handleServiceClick} className={pheader.hamlink}>租車服務</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/CarMenu" className={pheader.hamlink}>車款介紹</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/ServiceAddressPage" className={pheader.hamlink}>服務據點</Link>
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

