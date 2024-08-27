import React, { useState, useEffect } from "react";
import PageHeaderIn from "./PageHeaderIn";
import FooterIn from "./FooterIn";
import { useLocation } from 'react-router-dom';
import paycss from "../styles/Pay.module.css";
import axios from "axios";

const Pay = () => {
    const location = useLocation();
    const { rowData } = location.state || {}; // Default to an empty object if location.state is undefined

    const [formid, setFormid] = useState(rowData?.formid || "");
    const [customername, setCustomername] = useState(rowData?.customername || "");
    const [customeremail, setCustomeremail] = useState(rowData?.customeremail || "");
    const [carbrand, setCarbrand] = useState(rowData?.carbrand || "");
    const [rentdate, setRentdate]= useState(rowData?.rentdate || "");
    const [returndate, setReturndate]= useState(rowData?.returndate || "");
    const [paydata, setPaydata] = useState(null);
    const [total, setTotal] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        async function paycal() {
            console.log("Form ID:", formid);
    
            try {
                const response = await axios.post("http://localhost:8080/api/v1/pay/paydata", {
                    formid,
                    customername,
                    customeremail,
                    carbrand,
                    rentdate,
                    returndate
                });
    
                console.log("Response:", response);
            } catch (error) {
                console.error("發生錯誤", error);
    
                if (error.response) {
                    setError(`發生錯誤，請稍後再試: ${error.response.data.message}`);
                } else {
                    console.error("Error setting up request:", error.message);
                    setError(`發生錯誤，請稍後再試: ${error.message}`);
                }
            }
        }
    
        paycal();
    }, [formid, customername, customeremail, carbrand,rentdate,returndate]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:8080/api/v1/pay/getpaydata?formid=${formid}`);

                setPaydata(response.data);
                // Ensure that paydata is updated before converting total to string
                if (response.data.total !== undefined) {
                    setTotal(response.data.total.toString());
                }
            }catch(error){
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    },[formid]);

    
    console.log(formid);
    console.log(total);

    async function payaction(event) {
        event.preventDefault();
        setIsLoading(true); // Start loading
        try {
            const response = await axios.post("http://localhost:8080/api/v1/pay/payment", {
                formid,
                total
            });
            
            if (response.data) {
                const formElement = document.createElement('div');
                formElement.innerHTML = response.data;
                document.body.appendChild(formElement);
                formElement.querySelector('form').submit();
            } else {
                console.error('Unexpected response format:', response.data);
            }
        } catch (error) {
            console.error("發生錯誤", error);
            if (error.response) {
                setError(`發生錯誤，請稍後再試: ${error.response.data}`);
            } else {
                setError(`發生錯誤，請稍後再試: ${error.message}`);
            }
        } finally {
            setIsLoading(false); // Stop loading
        }
    }
    
    

    return (
        <div>
            <PageHeaderIn />
            <div className={paycss.bg}>
                <div className={paycss.container}>
                <h2 className={paycss.paytitle}>確認結帳</h2>
                {/*{error && <p className={paycss.error}>{error}</p>}*/}
                <table className={paycss.paytable}>
                    <thead>
                        <tr>
                            <th className={paycss.paythead}>租車地點</th>
                            <th className={paycss.paythead}>還車地點</th>
                            <th className={paycss.paythead}>租車日期</th>
                            <th className={paycss.paythead}>還車日期</th>
                            <th className={paycss.paythead}>車型</th>
                            <th className={paycss.paythead}>人數</th>
                            <th className={paycss.paythead}>折扣碼</th>
                            <th className={paycss.paythead}>貴賓姓名</th>
                            <th className={paycss.paythead}>貴賓信箱</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={paycss.paytbody}>{rowData?.rentplace}</td>
                            <td className={paycss.paytbody}>{rowData?.returnplace}</td>
                            <td className={paycss.paytbody}>{rowData?.rentdate}</td>
                            <td className={paycss.paytbody}>{rowData?.returndate}</td>
                            <td className={paycss.paytbody}>{rowData?.carbrand}</td>
                            <td className={paycss.paytbody}>{rowData?.passenger}</td>
                            <td className={paycss.paytbody}>{rowData?.couponcode}</td>
                            <td className={paycss.paytbody}>{rowData?.customername}</td>
                            <td className={paycss.paytbody}>{rowData?.customeremail}</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                {error ? (
                    <p>發生錯誤: {error}</p>
                ) : paydata ? (
                    Array.isArray(paydata) ? (
                        paydata.map((item) => (
                            <div key={item.formid}>
                                <p className={paycss.paytotaldays}>出租天數: {item.totaldays}</p>
                                <p className={paycss.paytotalprice}>總金額: {item.total}</p>
                                <button className={paycss.paybtn}>付款</button>
                            </div>
                        ))
                    ) : (
                        <div>
                            <p className={paycss.paytotaldays}>出租天數: {paydata.totaldays}</p>
                            <p className={paycss.paytotalprice}>總金額: {paydata.total}</p>
                            
                        </div>
                    )
                ) : (
                    <p>Loading...</p>
                )}
                <button className={paycss.paybtn} onClick={payaction} disabled={isLoading}>
                {isLoading ? 'Processing...' : '付款'}
                </button>
                </div>
            </div>
            <FooterIn />
        </div>
    );
};

export default Pay;
