import React from 'react';
import header from '../styles/Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={header.banner}>
                <div className={header.navbar}>
                    <img
                        src={require('../assets/logo.png')}
                        alt="背景圖"
                        className={header.logo}
                    />
                    <ul>
                        <li>
                            <a href=" ">首頁</a>
                        </li>
                        <li>
                            <a href=" ">關於我們</a>
                        </li>
                        <li>
                            <a href=" ">租車服務</a>
                        </li>
                        <li>
                            <a href=" ">車款介紹</a>
                        </li>
                        <li>
                            <a href=" ">聯絡方式</a>
                        </li>
                    </ul>
                </div>

                <div className={header.content}>
                    <h1>租借你想要的車子</h1>
                    <p>
                        請隨時查看我們的網頁內容
                        <br />
                        隨時有最新資訊
                    </p>
                    <div>
                        <button type="button">
                            <span></span>查看更多
                        </button>
                        <button type="button">
                            <span></span>訂閱我們
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
