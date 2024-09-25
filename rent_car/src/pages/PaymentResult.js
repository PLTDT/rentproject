import React, { useEffect, useState } from "react";
import PageHeaderIn from "../components/PageHeaderIn";
import FooterIn from "../components/FooterIn";
import { useLocation } from 'react-router-dom';
import paymentResult from "../styles/PaymentResult.module.css";

const PaymentResult = () => {
    const [merchantTradeNo, setMerchantTradeNo] = useState(null);
    const [merchantTradeDate, setMerchantTradeDate] = useState(null);
    const [formid, setFormid] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        
        const query = new URLSearchParams(location.search);
        const merchantTradeNo = query.get("MerchantTradeNo");
        const merchantTradeDate = query.get("MerchantTradeDate");
        const formid = query.get("formid");

        if (!merchantTradeNo || !merchantTradeDate || !formid) {
            setError("Missing query parameters");
            setLoading(false);
            return;
        }

        console.log("formid:", formid);
        console.log("merchantTradeNo:", merchantTradeNo);
        console.log("merchantTradeDate:", merchantTradeDate);

    
        setMerchantTradeNo(merchantTradeNo);
        setMerchantTradeDate(merchantTradeDate);
        setFormid(formid);
        setLoading(false);
    
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
                            <p>交易單號: {merchantTradeNo}</p>
                            <p>訂單號: {formid}</p>
                            <p>付款日期: {merchantTradeDate}</p>
                        </div>
                    </div>
                </div>
            )}
            <FooterIn />
        </div>
    );
};

export default PaymentResult;
