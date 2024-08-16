import React from "react";
import rent from "../styles/Rent.module.css";
import axios from "axios";
import { useState } from "react";

const CarBookingForm = () => {
    const [rentplace, setRentplace] = useState("");
    const [returnplace, setReturnplace] = useState("");
    const [rentdate, setRentdate] = useState("");
    const [returndate, setReturndate] = useState("");
    const [carbrand, setCarbrand] = useState("");
    const [passenger, setPassenger] = useState("");
    const [couponcode, setCouponcode] = useState("");
    const [error, setError] = useState("");

    async function bookingaction(event) {
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/api/v1/car/rentform/rentcar",{
            rentplace:rentplace,
            returnplace:returnplace,
            rentdate:rentdate,
            returndate:returndate,
            carbrand:carbrand,
            passenger:passenger,
            couponcode:couponcode
        })
        if(response.status===200){
            alert("租車成功");
        }else{
            alert("發生錯誤");
        }
    }catch(error){
            console.error("發生錯誤",error);
            alert("發生錯誤，請稍後再試"+error.message);
        }
    }
    return (
        <div className={rent.form_bg}>
            <div className={rent.container}>
                <form className={rent.booking_form} onSubmit={bookingaction}>
                    <h2 className={rent.form_title}>門市租車</h2>
                    <div className={rent.form_section} id="test">
                        <label htmlFor={rent.pickup_location}>取車地點</label>
                        <select className={rent.form_ctype} id="rentplace" name="rentplace" onChange={(event)=>{setRentplace(event.target.value)}} required>
                            <option value="">請選擇取車地點</option>
                            <option value="台北大安">台北大安</option>
                            <option value="新北蘆洲">新北蘆洲</option>
                            <option value="台中西屯">台中西屯</option>
                            <option value="高雄小港">高雄小港</option>
                        </select>
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="dropoff-location">還車地點</label>
                        <select className={rent.form_ctype} id="returnplace" name="returnplace" onChange={(event)=>{setReturnplace(event.target.value)}}required>
                            <option value="">請選擇取車地點</option>
                            <option value="台北大安">台北大安</option>
                            <option value="新北蘆洲">新北蘆洲</option>
                            <option value="台中西屯">台中西屯</option>
                            <option value="高雄小港">高雄小港</option>
                        </select>
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="pickup-date">取車日期</label>
                        <input type="date" className={rent.form_date} id="rentdate" name="rentdate" onChange={(event)=>{setRentdate(event.target.value)}}required/>
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="dropoff-date">還車日期</label>
                        <input type="date" className={rent.form_date} id="returndate" name="returndate" onChange={(event)=>{setReturndate(event.target.value)}}required/>
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="car-type">訂購車型</label>
                        <select className={rent.form_ctype} id="carbrand" name="carbrand" onChange={(event)=>{setCarbrand(event.target.value)}}required>
                            <option value="">請選擇租借車型</option>
                            <option value="SUZUKI Vitara">SUZUKI Vitara</option>
                            <option value="HONDA H FIT HEV 1.5">
                                HONDA H FIT HEV 1.5
                            </option>
                            <option value="TOYOTA NEW VIOS 1.5">
                                TOYOTA NEW VIOS 1.5
                            </option>
                            <option value="NISSAN LIVINA">NISSAN LIVINA</option>
                        </select>
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="passenger-count">乘車人數</label>
                        <input type="number" className={rent.form_pcount} min="1" id="passenger" name="passenger" onChange={(event)=>{setPassenger(event.target.value)}}required/>
                    </div>
                    <div className={rent.form_section}>
                        <label htmlFor="coupon-code">折價券號</label>
                        <input type="text" className={rent.form_ccode} id="couponcode" name="couponcode"onChange={(event)=>{setCouponcode(event.target.value)}}/>
                    </div>
                    {error && <p className={rent.error}>{error}</p>}
                    <button className={rent.form_rbt} type="submit">
                        預訂好車
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CarBookingForm;
