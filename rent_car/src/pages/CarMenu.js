import React from "react";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import carmenu from "../styles/CarMenu.module.css";

const CarMenu = () => {
    const handleServiceClick = (event) => {
        // 阻止默認的連結行為
        event.preventDefault();
        // 使用 alert 來提示用戶
        alert("請先登入");
    };
    return (
        <div>
        <PageHeader/>
        <div className={carmenu.bg}>
            <div className={carmenu.container}>
                <div className={carmenu.box}>
                <div className={carmenu.title}>車款介紹</div>
                    <div className="row">
                        <div className={`${carmenu.card} col-12 col-md-6 col-lg-3`} >
                            <div className={`${carmenu.carimg} ${carmenu.p1}`}></div>
                            <h3 className={carmenu.cartitle}>SUZUKI Vitara</h3>
                            <p className={carmenu.carword}>適合人數: 5人</p>
                            <p className={carmenu.carword}><strong className={carmenu.price}>NT$ 3000</strong>/日</p>
                            <button className={carmenu.btn} onClick={() => handleServiceClick('SUZUKI Vitara')}>立即預訂</button>
                        </div>
                        <div className={`${carmenu.card} col-12 col-md-6 col-lg-3`}>
                            <div className={`${carmenu.carimg} ${carmenu.p2}`}></div>
                            <h3 className={carmenu.cartitle}>HONDA H FIT HEV 1.5</h3>
                            <p className={carmenu.carword}>適合人數: 4人</p>
                            <p className={carmenu.carword}><strong className={carmenu.price}>NT$ 2,500</strong>/日</p>
                            <button className={carmenu.btn} onClick={() => handleServiceClick('HONDA H FIT HEV 1.5')}>立即預訂</button>
                        </div>
                        <div className={`${carmenu.card} col-12 col-md-6 col-lg-3`}>
                            <div className={`${carmenu.carimg} ${carmenu.p3}`}></div>
                            <h3 className={carmenu.cartitle}>TOYOTA NEW VIOS 1.5</h3>
                            <p className={carmenu.carword}>適合人數: 4人</p>
                            <p className={carmenu.carword}><strong className={carmenu.price}>NT$ 2,000</strong>/日</p>
                            <button className={carmenu.btn} onClick={() => handleServiceClick('TOYOTA NEW VIOS 1.5')}>立即預訂</button>
                        </div>
                        <div className={`${carmenu.card} col-12 col-md-6 col-lg-3`}>
                            <div className={`${carmenu.carimg} ${carmenu.p4}`}></div>
                            <h3 className={carmenu.cartitle}>NISSAN LIVINA</h3>
                            <p className={carmenu.carword}>適合人數: 5人</p>
                            <p className={carmenu.carword}><strong className={carmenu.price}>NT$ 1,800</strong>/日</p>
                            <button className={carmenu.btn} onClick={() => handleServiceClick('NISSAN LIVINA')}>立即預訂</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default CarMenu;