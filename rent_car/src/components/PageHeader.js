import React, { useState } from "react";
import pheader from "../styles/PageHeader.module.css";
import Login from "./Login"; // 引入 Login 元件
import Register from "./Register"; // 引入 Register 元件

const PageHeader = () => {
    const [showLogin, setShowLogin] = useState(false);

    const openLogin = () => {
        setShowLogin(true);
    };

    const closeLogin = () => {
        setShowLogin(false);
    };

    const [showRegister, setShowRegister] = useState(false);

    const openRegister = () => {
        setShowRegister(true);
    };

    const closeRegister = () => {
        setShowRegister(false);
    };

    return (
        <header className={pheader.header}>
            <div className={pheader.banner}>
                <a href="/HomePage ">
                    <img
                        src={require("../assets/logo.png")}
                        alt="背景圖"
                        className={pheader.logo}
                    />
                </a>
                <div className={pheader.navbar}>
                    <ul>
                        <li className={pheader.menu}>
                            <a href="/HomePage ">首頁</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href="/About ">關於我們</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href="/Rent ">租車服務</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href=" ">車款介紹</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href=" ">服務據點</a>
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
            {showLogin && <Login closeLogin={closeLogin} />} {/* 顯示彈窗 */}
            {showRegister && <Register closeRegister={closeRegister} />}
        </header>
    );
};

export default PageHeader;
