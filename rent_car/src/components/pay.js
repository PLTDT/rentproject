import React, { useState, useEffect } from "react";
import PageHeaderIn from "./PageHeaderIn";
import FooterIn from "./FooterIn";
import { useLocation } from 'react-router-dom';
import paycss from "../styles/Pay.module.css";
import axios from "axios";

const Pay = () => {
    const location = useLocation();
    const { rowData } = location.state || {};

    const [formid, setFormid] = useState(rowData?.formid || "");
    const [total, setTotal] = useState("");
    const [paydata, setPaydata] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [htmlResponse, setHtmlResponse] = useState("");
    const [dataAdded, setDataAdded] = useState(false); // New state to track data addition

    useEffect(() => {
        if (rowData) {
            setFormid(rowData.formid || "");
            const addData = async () => {
                try {
                    const response = await axios.post(`http://tongbro.ddns.net:8080/api/v1/pay/paydata`, rowData);
                    console.log("Added payment data:", response.data);
                    setDataAdded(true); // Set to true when data is successfully added
                } catch (error) {
                    console.error("Error adding data:", error);
                    setError("Error adding payment data");
                }
            };
            addData();
        }
    }, [rowData]);

    useEffect(() => {
        if (dataAdded && formid) { // Check if data has been added
            const fetchData = async () => {
                try {
                    const response = await axios.get(`http://tongbro.ddns.net:8080/api/v1/pay/getpaydata`, {
                        params: { formid }
                    });

                    console.log("Fetched payment data:", response.data);
                    setPaydata(response.data);

                    if (response.data.total !== undefined) {
                        setTotal(response.data.total.toString());
                    }
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setError("發生錯誤，請稍後再試");
                }
            };

            fetchData();
        }
    }, [dataAdded, formid]);

    async function payaction(event) {
        event.preventDefault();
        console.log("payaction method triggered");
        console.log("formid:", formid);
        console.log("total:", total); // 確認這裡的 total 值是否正確
    
        setIsLoading(true);
        try {
            const response = await axios.get("http://tongbro.ddns.net:8080/payment", {
                params: { formid, total }
            });

            console.log("Received response data:", response.data);

            if (typeof response.data === 'string') {
                setHtmlResponse(response.data);
                const parser = new DOMParser();
                const doc = parser.parseFromString(response.data, 'text/html');
                const form = doc.querySelector('form');
                if (form) {
                    document.body.appendChild(form);
                    form.submit();
                }
            } else {
                console.error("Unexpected response format");
            }
        } catch (error) {
            console.error("發生錯誤", error);
            setError(`發生錯誤，請稍後再試: ${error.response?.data || error.message}`);
        } finally {
            setIsLoading(false);
        }
    }
    

    async function linepayAction() {
        console.log("formid:", formid);
        console.log("total:", total);
        
        try {
            const response = await axios.post("http://tongbro.ddns.net:8080/api/linepay/request", null, {
                params: { formid, total }
            });
            console.log("Received response data:", response.data);
    
            const { web } = response.data.info.paymentUrl;
            const { transactionId } = response.data.info;
    
            console.log("Web URL:", web);
            console.log("Transaction ID:", transactionId);
            
            window.location.href = web;
    
        } catch (error) {
            console.error("An error occurred:", error.message);
            setError(`Request error: ${error.message}`);
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
                    <div className={paycss.paybtns}>
                    <button className={paycss.ecpaybtn} onClick={payaction} disabled={isLoading}>
                        {isLoading ? 'Processing...' : '信用卡付款'}
                    </button>
                    <button className={paycss.linepaybtn} onClick={linepayAction} disabled={isLoading}>
                        {isLoading ? 'Processing...' : 'linepay付款'}
                    </button>
                    </div>
                </div>
            </div>
            <FooterIn />
        </div>
    );
};

export default Pay;
