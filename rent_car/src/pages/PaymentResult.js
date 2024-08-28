import React, { useEffect, useState } from "react";
import PageHeaderIn from "../components/PageHeaderIn";
import FooterIn from "../components/FooterIn";
import { useLocation } from 'react-router-dom';

const PaymentResult = () => {
    const [merchantTradeNo, setMerchantTradeNo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        // 解析 URL 查詢參數
        const query = new URLSearchParams(location.search);
        const merchantTradeNo = query.get("MerchantTradeNo");

        console.log("URL Search Params:", location.search); // 確認 URL 查詢參數
        console.log("MerchantTradeNo:", merchantTradeNo); // 調試輸出

        if (!merchantTradeNo) {
            setError("Missing MerchantTradeNo in query parameters");
            setLoading(false);
            return;
        }

        setMerchantTradeNo(merchantTradeNo);
        setLoading(false);
    }, [location.search]);

    return (
        <div>
            <PageHeaderIn />
            <h1>Payment Result</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <h2>付款結果</h2>
                    <p>付款成功！訂單號: {merchantTradeNo}</p>
                </div>
            )}
            <FooterIn />
        </div>
    );
};

export default PaymentResult;
