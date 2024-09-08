import React from "react";
import footer from "../styles/Footer.module.css";

const Footer = () => {

    const handleServiceClick = (event) => {
        event.preventDefault();
        alert("請先登入");
    };

    return (
        <footer className={footer.footer}>
            <div className={`${footer.box} container`}>
                <div className="row">
                    <div className={`${footer.footerContent} col-12 col-sm-4 col-md-4`}>
                        <h3>聯絡我們</h3>
                        <p>Email: <br />cheaprent@gmail.com</p>
                        <p>電話號碼：<br />(02)-2795-8595</p>
                        <p>地址：<br />台北市大安區建國南路二段231號3樓</p>
                    </div>
                    <div className={`${footer.footerContent} col-12 col-sm-4 col-md-4`}>
                        <h3>快速連結</h3>
                        <ul className={footer.list}>
                            <li>
                                <a className={footer.lista} href="/HomePage">
                                    首頁
                                </a>
                            </li>
                            <li>
                                <a className={footer.lista} href="/About">
                                    關於我們
                                </a>
                            </li>
                            <li>
                                <a className={footer.lista} href="/Rent" onClick={handleServiceClick}>
                                    租車服務
                                </a>
                            </li>
                            <li>
                                <a className={footer.lista} href="/CarMenu">
                                    車款介紹
                                </a>
                            </li>
                            <li>
                                <a className={footer.lista} href="/ServiceAddressPage">
                                    服務據點
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${footer.footerContent} col-12 col-sm-4 col-md-4`}>
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
            </div>
            <div className={footer.bottomBar}>
                <p>&copy; 2024 PLTDT. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
