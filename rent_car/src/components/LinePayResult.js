import React, { useState, useEffect } from 'react';
import PageHeaderIn from "./PageHeaderIn";
import FooterIn from "./FooterIn";
import { useLocation } from 'react-router-dom';
import paymentResult from "../styles/PaymentResult.module.css";
import axios from "axios";

const LinePayResult = () => {
    const [transactionId, setTransactionId] = useState(null);
    const [total, setTotal] = useState(null);
    const [formid, setFormid] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const query = new URLSearchParams(location.search);
        const transactionId = query.get("transactionId");
        const total = query.get("total");
        const formid = query.get("formid");

        if (!transactionId || !total || !formid) {
            setError("Missing query parameters");
            setLoading(false);
            return;
        }

        setTransactionId(transactionId);
        setTotal(total);
        setFormid(formid);

        async function confirmData() {
            console.log("transactionId:", transactionId);
            console.log("formid:", formid);
            console.log("total:", total);
            try {
                const result = await axios.post(`https://tongbro.ddns.net:8080/api/linepay/confirm`, null, {
                    params: { transactionId, total, formid }
                });
                console.log(result.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setError("Failed to confirm payment");
                setLoading(false);
            }
        }

        confirmData();
    }, [location.search]);

    return (
        <div>
            <PageHeaderIn />
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div className={paymentResult.info_bg}>
                    <div className={paymentResult.container}>
                        <h2 className={paymentResult.info_title}>付款結果</h2>
                        <div className={paymentResult.info_item}>
                            <p>交易單號: {transactionId}</p>
                            <p>訂單號: {formid}</p>
                        </div>
                    </div>
                </div>
            )}
            <FooterIn />
        </div>
    );
};

export default LinePayResult;
