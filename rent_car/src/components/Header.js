import React from "react";
import header from "../styles/Header.module.css";

const Header = () => {
    const handleServiceClick = (event) => {
        // 阻止默認的連結行為
        event.preventDefault();
        // 使用 alert 來提示用戶
        alert("請先登入");
    };

    return (
        <header className={header.header}>
            <div className={header.banner}>
                <div className={header.content}>
                    <h1>租借你想要的車子</h1>
                    <p>
                        請隨時查看我們的網頁內容
                        <br />
                        隨時有最新資訊
                    </p>
                    <div>
                        <a href="/CarMenu" className={header.bta}>
                            <button className={header.bt} type="button">
                                <span className={header.btsp}></span>查看更多
                            </button>
                        </a>
                        <button className={header.bt} type="button" onClick={handleServiceClick}>
                            <a href="/Rent" className={header.bta}><span className={header.btsp}></span>立即預訂</a>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
