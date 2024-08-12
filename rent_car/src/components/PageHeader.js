import React from 'react';
import pheader from '../styles/PageHeader.module.css';

const Header = () => {
    return (
        <header className={pheader.header}>
            <div className={pheader.banner}>
                <a href="/HomePage ">
                    <img
                        src={require('../assets/logo.png')}
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
                            <a href=" ">聯絡方式</a>
                        </li>
                    </ul>
                    <div className={pheader.signbtdiv}>
                        <div className={pheader.signdiv}>
                            <button className={pheader.signbt}>
                                <span className={pheader.sisp}></span>
                                <a className={pheader.signbta} href=" ">
                                    登入
                                </a>
                            </button>
                        </div>
                        <div className={pheader.signdiv}>
                            <button className={pheader.signbt}>
                                <span className={pheader.sisp}></span>
                                <a className={pheader.signbta} href=" ">
                                    註冊
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
