import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import rent from "../styles/Rent.module.css";
import axios from "axios";

// 定義 CarBookingForm 元件
const CarBookingForm = () => {

    const user = JSON.parse(localStorage.getItem('user'));
    const cname = user?.employeename || ""; // Avoid error if user or employeename is undefined
    const cemail = user?.email || "";
    // 設定狀態變數
    const [rentplace, setRentplace] = useState(""); // 取車地點
    const [returnplace, setReturnplace] = useState(""); // 還車地點
    const [rentdate, setRentdate] = useState(""); // 取車日期
    const [returndate, setReturndate] = useState(""); // 還車日期
    const [carbrand, setCarbrand] = useState(""); // 訂購車型
    const [passenger, setPassenger] = useState(""); // 乘車人數
    const [customername] = useState(cname); // 貴賓姓名
    const [customeremail] = useState(cemail); // 貴賓信箱
    const [error, setError] = useState(""); // 錯誤訊息
    const location = useLocation(); // 取得 URL 查詢參數
      // 解析 URL 中的查詢參數
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const carTitle = params.get("carTitle");

        if (carTitle) {
            setCarbrand(decodeURIComponent(carTitle)); // 解碼帶有空格的參數
        }
    }, [location]);

    // 處理表單提交事件
    // 處理表單提交事件
async function bookingaction(event) {
    event.preventDefault(); // 防止表單默認行為（刷新頁面）
    console.log("Submitting form...");

    if (new Date(returndate) <= new Date(rentdate)) {
        setError("還車日期必須晚於取車日期");
        return;
    }

    try {
        // 發送 POST 請求到後端 API
        const response = await axios.post("https://tongbro.ddns.net:8080/api/v1/rentform/rentcar", {
            rentplace,
            returnplace,
            rentdate,
            returndate,
            carbrand,
            passenger,
            customername,
            customeremail,
        });

        console.log("Response:", response);
    
        // 根據回應狀態顯示成功或錯誤訊息
        if (response.status === 200) {
            alert("租車成功");
            // 清除表單內容
            setRentplace("");
            setReturnplace("");
            setRentdate("");
            setReturndate("");
            setCarbrand("");
            setPassenger("");
            //setCustomername("");
            //setCustomeremail("");
            setError("");  // 清除錯誤訊息
            
            // 刷新頁面
            window.location.reload();
        } else {
            setError("發生錯誤");
        }
    } catch (error) {
        console.error("發生錯誤", error);
        // 根據錯誤響應設置錯誤訊息
        const errorMessage = error.response?.data?.message || error.message;
        setError(`發生錯誤，請稍後再試: ${errorMessage}`);
    }
}


    // 返回表單 JSX
    return (
        <div className={rent.form_bg}>
            <div className={rent.container}>
                <form className={rent.booking_form} onSubmit={bookingaction}>
                    <h2 className={rent.form_title}>門市租車</h2>
                    
                    {/* 取車地點選擇 */}
                    <div className={rent.form_section}>
                        <label htmlFor="rentplace">取車地點</label>
                        <select
                            className={rent.form_ctype}
                            id="rentplace"
                            name="rentplace"
                            value={rentplace}
                            onChange={(event) => setRentplace(event.target.value)}
                            required
                        >
                            <option value="">請選擇取車地點</option>
                            <option value="台北大安">台北大安</option>
                            <option value="新北蘆洲">新北蘆洲</option>
                            <option value="台中西屯">台中西屯</option>
                            <option value="高雄小港">高雄小港</option>
                        </select>
                    </div>

                    {/* 還車地點選擇 */}
                    <div className={rent.form_section}>
                        <label htmlFor="returnplace">還車地點</label>
                        <select
                            className={rent.form_ctype}
                            id="returnplace"
                            name="returnplace"
                            value={returnplace}
                            onChange={(event) => setReturnplace(event.target.value)}
                            required
                        >
                            <option value="">請選擇還車地點</option>
                            <option value="台北大安">台北大安</option>
                            <option value="新北蘆洲">新北蘆洲</option>
                            <option value="台中西屯">台中西屯</option>
                            <option value="高雄小港">高雄小港</option>
                        </select>
                    </div>

                    {/* 取車日期輸入 */}
                    <div className={rent.form_section}>
                        <label htmlFor="rentdate">取車日期</label>
                        <input
                            type="date"
                            className={rent.form_date}
                            id="rentdate"
                            name="rentdate"
                            value={rentdate}
                            onChange={(event) => setRentdate(event.target.value)}
                            required
                        />
                    </div>

                    {/* 還車日期輸入 */}
                    <div className={rent.form_section}>
                        <label htmlFor="returndate">還車日期</label>
                        <input
                            type="date"
                            className={rent.form_date}
                            id="returndate"
                            name="returndate"
                            value={returndate}
                            onChange={(event) => setReturndate(event.target.value)}
                            required
                        />
                    </div>

                    {/* 訂購車型選擇 */}
                    <div className={rent.form_section}>
                        <label htmlFor="carbrand">訂購車型</label>
                        <select
                            className={rent.form_ctype}
                            id="carbrand"
                            name="carbrand"
                            value={carbrand}
                            onChange={(event) => setCarbrand(event.target.value)}
                            required
                        >
                            <option value="">請選擇租借車型</option>
                            <option value="SUZUKI Vitara">SUZUKI Vitara</option>
                            <option value="HONDA H FIT HEV 1.5">HONDA H FIT HEV 1.5</option>
                            <option value="TOYOTA NEW VIOS 1.5">TOYOTA NEW VIOS 1.5</option>
                            <option value="NISSAN LIVINA">NISSAN LIVINA</option>
                        </select>
                    </div>

                    {/* 乘車人數輸入 */}
                    <div className={rent.form_section}>
                        <label htmlFor="passenger">乘車人數</label>
                        <input
                            type="number"
                            className={rent.form_pcount}
                            min="1"
                            id="passenger"
                            name="passenger"
                            value={passenger}
                            onChange={(event) => setPassenger(event.target.value)}
                            required
                        />
                    </div>

                    {/* 折價券號輸入 
                    <div className={rent.form_section}>
                        <label htmlFor="couponcode">折價券號</label>
                        <input
                            type="text"
                            className={rent.form_ccode}
                            id="couponcode"
                            name="couponcode"
                            value={couponcode}
                            onChange={(event) => setCouponcode(event.target.value)}
                        />
                    </div>
                    {/*<div className={rent.form_section}>
                        <label htmlFor="customername">客戶姓名</label>
                        <input
                            type="search"
                            className={rent.form_ccode}
                            id="customername"
                            name="customername"
                            value={customername}
                            readOnly
                        />
                    </div>*/}
                    {/* 顯示錯誤訊息 */}
                    {error && <p className={rent.error}>{error}</p>}
                    
                    {/* 提交按鈕 */}
                    <button className={rent.form_rbt} type="submit">
                        預訂好車
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CarBookingForm;