import React, { useState } from "react";
import pheader from "../styles/PageHeader.module.css";
import Login from "./Login"; // 引入 Login 元件
import Register from "./Register"; // 引入 Register 元件

const PageHeader = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

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
                <div className={pheader.navbar}>
                    <ul>
                        <li className={pheader.menu}>
                            <a href="/HomePage">首頁</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href="/About">關於我們</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href="/Rent" onClick={handleServiceClick}>租車服務</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href="#">車款介紹</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href="/ServiceAddressPage">服務據點</a>
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
            </div>
            {showLogin && <Login closeLogin={closeLogin} />} {/* 顯示登入彈窗 */}
            {showRegister && <Register closeRegister={closeRegister} />} {/* 顯示註冊彈窗 */}
        </header>
    );
};

export default PageHeader;

