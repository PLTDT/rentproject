import React from "react";
import { useNavigate, Link } from "react-router-dom";
import pheader from "../styles/PageHeader.module.css";

const PageHeaderIn = () => {
    const navigate = useNavigate();

    // 從 localStorage 中取得用戶資訊
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        // 清除登入狀態
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // 移除用戶資訊
        alert("登出成功");
        navigate("/HomePage");
    };

    return (
        <header className={pheader.header}>
            <div className={pheader.banner}>
                <Link to="/HomePageIn">
                    <img
                        src={require("../assets/logo.png")}
                        alt="背景圖"
                        className={pheader.logo}
                    />
                </Link>
                <div className={pheader.navbar}>
                    <ul>
                        <li className={pheader.menu}>
                            <Link to="/HomePageIn">首頁</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/AboutIn">關於我們</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/Rent">租車服務</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="#">車款介紹</Link> {/* 使用 `#` 來處理空鏈接 */}
                        </li>
                        <li className={pheader.menu}>
                            <Link to="#">服務據點</Link> {/* 使用 `#` 來處理空鏈接 */}
                        </li>
                    </ul>
                    <div className={pheader.welcome}>
                    {user && (
                                <span className={pheader.username}>歡迎 ~ {user.employeename}</span>
                            )}
                    </div>       
                    <div className={pheader.signbtdiv}>
                        <div className={pheader.signdiv}>
                            <button
                                className={pheader.signbt}
                                onClick={handleLogout}
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
