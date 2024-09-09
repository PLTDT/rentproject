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
                        <button className={header.bt} type="button">
                            <a href="/CarMenu" className={header.bta}><span className={header.btsp}></span>查看更多</a>
                        </button>
                        <button className={header.bt} type="button">
                            <a href="/Rent" className={header.bta}><span className={header.btsp} onClick={handleServiceClick}></span>立即預訂</a>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

//<a href="/HomePage "><img src={require('../assets/logo.png')} alt="背景圖" className={header.logo} /></a>
//<div className={header.navbar}>
//    <ul>
//        <li className={header.menu}><a href="/HomePage ">首頁</a></li>
//        <li className={header.menu}><a href="/About ">關於我們</a></li>
//        <li className={header.menu}><a href=" ">租車服務</a></li>
//        <li className={header.menu}><a href=" ">車款介紹</a></li>
//        <li className={header.menu}><a href=" ">聯絡方式</a></li>
//    </ul>
//    <div className={header.signbtdiv}>
//        <div className={header.signdiv}><button className={header.signbt}><span className={header.sisp}></span><a className={header.signbta} href=" ">登入</a></button></div>
//        <div className={header.signdiv}><button className={header.signbt}><span className={header.sisp}></span><a className={header.signbta} href=" ">註冊</a></button></div>
//    </div>
//</div>

//<a href="/HomePage "><img src={require('../assets/logo.png')} alt="背景圖" className={header.logo} /></a>
//<div className={header.navbar}>
//    <ul>
//        <li className={header.menu}><a href="/HomePage ">首頁</a></li>
//        <li className={header.menu}><a href="/About ">關於我們</a></li>
//        <li className={header.menu}><a href=" ">租車服務</a></li>
//        <li className={header.menu}><a href=" ">車款介紹</a></li>
//        <li className={header.menu}><a href=" ">聯絡方式</a></li>
//    </ul>
//    <div className={header.signbtdiv}>
//        <div className={header.signdiv}><button className={header.signbt}><span className={header.sisp}></span><a className={header.signbta} href=" ">登入</a></button></div>
//        <div className={header.signdiv}><button className={header.signbt}><span className={header.sisp}></span><a className={header.signbta} href=" ">註冊</a></button></div>
//    </div>
//</div>
