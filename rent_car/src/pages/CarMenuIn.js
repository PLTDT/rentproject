import React from "react";
import PageHeaderIn from "../components/PageHeaderIn";
import FooterIn from "../components/FooterIn";
import carmenu from "../styles/CarMenu.module.css";

const CarMenuIn = () => {
    const handleBookingClick = (carTitle) => {
        // 将车款名称作为查询参数附加到 URL
        const encodedCarTitle = encodeURIComponent(carTitle);
        window.location.href = `/Rent?carTitle=${encodedCarTitle}`;
    };

    return (
    <div>
        <PageHeaderIn/>
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
                            <button className={carmenu.btn} onClick={() => handleBookingClick('SUZUKI Vitara')}>立即預訂</button>
                        </div>
                        <div className={`${carmenu.card} col-12 col-md-6 col-lg-3`}>
                            <div className={`${carmenu.carimg} ${carmenu.p2}`}></div>
                            <h3 className={carmenu.cartitle}>HONDA H FIT HEV 1.5</h3>
                            <p className={carmenu.carword}>適合人數: 4人</p>
                            <p className={carmenu.carword}><strong className={carmenu.price}>NT$ 2,500</strong>/日</p>
                            <button className={carmenu.btn} onClick={() => handleBookingClick('HONDA H FIT HEV 1.5')}>立即預訂</button>
                        </div>
                        <div className={`${carmenu.card} col-12 col-md-6 col-lg-3`}>
                            <div className={`${carmenu.carimg} ${carmenu.p3}`}></div>
                            <h3 className={carmenu.cartitle}>TOYOTA NEW VIOS 1.5</h3>
                            <p className={carmenu.carword}>適合人數: 4人</p>
                            <p className={carmenu.carword}><strong className={carmenu.price}>NT$ 2,000</strong>/日</p>
                            <button className={carmenu.btn} onClick={() => handleBookingClick('TOYOTA NEW VIOS 1.5')}>立即預訂</button>
                        </div>
                        <div className={`${carmenu.card} col-12 col-md-6 col-lg-3`}>
                            <div className={`${carmenu.carimg} ${carmenu.p4}`}></div>
                            <h3 className={carmenu.cartitle}>NISSAN LIVINA</h3>
                            <p className={carmenu.carword}>適合人數: 5人</p>
                            <p className={carmenu.carword}><strong className={carmenu.price}>NT$ 1,800</strong>/日</p>
                            <button className={carmenu.btn} onClick={() => handleBookingClick('NISSAN LIVINA')}>立即預訂</button>
                        </div>
                </div>
            </div>
            </div>
        </div>
        <FooterIn/>
    </div>
    )
}

export default CarMenuIn;