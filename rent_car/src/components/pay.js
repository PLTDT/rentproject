import React, { useState, useEffect } from "react";
import PageHeaderIn from "./PageHeaderIn";
import FooterIn from "./FooterIn";
import { useLocation } from 'react-router-dom';
import paycss from "../styles/Pay.module.css";
import axios from "axios";

const Pay = () => {
    const location = useLocation();
    const { rowData } = location.state || {}; // Default to an empty object if location.state is undefined

    const [formid] = useState(rowData?.formid || "");
    const [total, setTotal] = useState("");
    const [paydata, setPaydata] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch payment data when component mounts or formid changes
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/pay/getpaydata`, {
                    params: { formid }
                });

                setPaydata(response.data);

                // Ensure that total is updated from the response
                if (response.data.total !== undefined) {
                    setTotal(response.data.total.toString());
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("發生錯誤，請稍後再試");
            }
        };

        fetchData();
    }, [formid]);

    async function payaction(event) {
        event.preventDefault();
        setIsLoading(true); // Start loading
        try {
            // 使用 GET 請求並傳遞查詢參數
            const response = await axios.get("http://localhost:8080/payment", {
                params: { formid, total }
            });
    
            // 確保返回的是 HTML 表單，而不是 JSON
            if (response.data) {
                console.log("Received HTML form:", response.data); // Log the received HTML
                
                // Create a div to hold the form and append it to the body
                const formElement = document.createElement('div');
                formElement.innerHTML = response.data;
                document.body.appendChild(formElement);
                
                // Check if form is correctly found
                const form = formElement.querySelector('form');
                if (form) {
                    form.submit();
                } else {
                    console.error('表單未找到');
                }
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
                    {error && <p className={paycss.error}>{error}</p>}
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
                    {paydata ? (
                        <div>
                            <p className={paycss.paytotaldays}>出租天數: {paydata.totaldays}</p>
                            <p className={paycss.paytotalprice}>總金額: {paydata.total}</p>
                        </div>
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
