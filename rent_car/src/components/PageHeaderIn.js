import React from "react";
import { useNavigate } from "react-router-dom"; // 引入 useNavigate
import pheader from "../styles/PageHeader.module.css";

const PageHeaderIn = () => {
    const navigate = useNavigate(); // 初始化 useNavigate

    const handleLogout = () => {
        // 這裡可以添加登出邏輯，比如清理 session 或 token 等
        alert("登出成功");
        navigate("/HomePage"); // 導航到 HomePage
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
                            <a href="/HomePageIn ">首頁</a>
                        </li>
                        <li className={pheader.menu}>
                            <a href="/AboutIn ">關於我們</a>
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
                                onClick={handleLogout} // 綁定登出事件
                            >
                                <span className={pheader.sisp}></span>
                                登出
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PageHeaderIn;



