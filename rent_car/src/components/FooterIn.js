import React from "react";
import footer from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={footer.footer}>
            <div className={footer.container}>
                <div className={footer.footerContent}>
                    <h3>聯絡我們</h3>
                    <p>
                        Email: cheaprent@gmail.com&nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    </p>
                    <p>
                        電話號碼：(02)-2795-8595&nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                        &nbsp; &nbsp;
                    </p>
                    <p>地址：台北市大安區建國南路二段231號3樓</p>
                </div>
                <div className={footer.footerContent}>
                    <h3>快速連結</h3>
                    <ul className={footer.list}>
                        <li>
                            <a className={footer.lista} href="/HomePageIn ">
                                首頁
                            </a>
                        </li>
                        <li>
                            <a className={footer.lista} href="/AboutIn ">
                                關於我們
                            </a>
                        </li>
                        <li>
                            <a className={footer.lista} href="/Rent ">
                                租車服務
                            </a>
                        </li>
                        <li>
                            <a className={footer.lista} href=" ">
                                車款介紹
                            </a>
                        </li>
                        <li>
                            <a className={footer.lista} href=" ">
                                服務據點
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={footer.footerContent}>
                    <h3>追蹤我們</h3>
                    <ul className={footer.socialIcons}>
                        <li>
                            <a className={footer.faba} href=" ">
                                <i className="fab fa-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a className={footer.faba} href=" ">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a className={footer.faba} href=" ">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a className={footer.faba} href=" ">
                                <i className="fab fa-line"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={footer.bottomBar}>
                <p>&copy; 2024 your company. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
