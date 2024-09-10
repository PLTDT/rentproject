import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import pheader from "../styles/PageHeader.module.css";

const PageHeaderIn = () => {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);

    // 從 localStorage 中取得用戶資訊
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        // 清除登入狀態
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // 移除用戶資訊
        alert("登出成功");
        navigate("/HomePage");
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // 切換漢堡選單狀態
    };

    const closeNav = () => {
        setIsNavOpen(false); // 自動關閉漢堡選單
    };

    return (
        <header className={pheader.header}>
            <div className={pheader.banner}>
                <Link to="/HomePageIn" onClick={closeNav}>
                    <img
                        src={require("../assets/logo.png")}
                        alt="背景圖"
                        className={pheader.logo}
                    />
                </Link>
                <div>
                    <button className={pheader.hamburger} onClick={toggleNav}>
                        <div className={pheader.line}></div>
                        <div className={pheader.line}></div>
                        <div className={pheader.line}></div>
                    </button>
                </div>
                <div className={`${pheader.navbar} ${isNavOpen ? pheader.show : ''}`}>
                    <ul>
                        <li className={pheader.menu}>
                            <Link to="/HomePageIn" onClick={closeNav}>首頁</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/AboutIn" onClick={closeNav}>關於我們</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/Rent" onClick={closeNav}>租車服務</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/MemberInfoPage" onClick={closeNav}>會員資料</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/RentHistory" onClick={closeNav}>訂單紀錄</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/CarMenuIn" onClick={closeNav}>車款介紹</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/ServiceAddressPageIn" onClick={closeNav}>服務據點</Link>
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
                <div className={pheader.hamcontainer}>
                    {isNavOpen && (
                        <ul>
                            <li className={pheader.hammenu}>
                                <Link to="/HomePageIn" className={pheader.hamlink} onClick={closeNav}>首頁</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/AboutIn" className={pheader.hamlink} onClick={closeNav}>關於我們</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/Rent" className={pheader.hamlink} onClick={closeNav}>租車服務</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/MemberInfoPage" className={pheader.hamlink} onClick={closeNav}>會員資料</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/RentHistory" className={pheader.hamlink} onClick={closeNav}>訂單紀錄</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/CarMenuIn" className={pheader.hamlink} onClick={closeNav}>車款介紹</Link>
                            </li>
                            <li className={pheader.hammenu}>
                                <Link to="/ServiceAddressPageIn" className={pheader.hamlink} onClick={closeNav}>服務據點</Link>
                            </li>
                            <button className={pheader.hamsignbt} onClick={handleLogout}>
                                登出
                            </button>
                        </ul>
                    )}
                </div>
            </div>
        </header>
    );
};

export default PageHeaderIn;
