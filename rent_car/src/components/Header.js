import React from 'react';
import header from '../styles/Header.module.css';
import { Outlet, Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={header.header}>
            <div className={header.banner}>
                <img
                    src={require('../assets/logo.png')}
                    alt="背景圖"
                    className={header.logo}
                />
                <div className={header.navbar}>
                    <ul>
                        <li className={header.menu}>
                            <link to="/">首頁</link>
                        </li>
                        <li className={header.menu}>
                            <link to="/">關於我們</link>
                        </li>
                        <li className={header.menu}>
                            <link to="/">租車服務</link>
                        </li>
                        <li className={header.menu}>
                            <link to="/">車款介紹</link>
                        </li>
                        <li className={header.menu}>
                            <link to="/">聯絡方式</link>
                        </li>
                    </ul>
                    <div className={header.signbtdiv}>
                        <div className={header.signdiv}>
                            <button className={header.signbt}>
                                <span className={header.sisp}></span>
                                <a href=" ">登入</a>
                            </button>
                        </div>
                        <div className={header.signdiv}>
                            <button className={header.signbt}>
                                <span className={header.sisp}></span>
                                <a href=" ">註冊</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={header.content}>
                    <h1>租借你想要的車子</h1>
                    <p>
                        請隨時查看我們的網頁內容
                        <br />
                        隨時有最新資訊
                    </p>
                    <div>
                        <button className={header.bt} type="button">
                            <span className={header.btsp}></span>查看更多
                        </button>
                        <button className={header.bt} type="button">
                            <span className={header.btsp}></span>訂閱我們
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
