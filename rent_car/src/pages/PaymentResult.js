import React, { useEffect, useState } from "react";
import PageHeaderIn from "../components/PageHeaderIn";
import FooterIn from "../components/FooterIn";
import { useLocation } from 'react-router-dom';
import paymentResult from "../styles/PaymentResult.module.css";

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
            <div className={paymentResult.info_bg}>
                <div className={paymentResult.container}>
                    <div className={paymentResult.info_title}>付款結果</div>
                    {loading ? (
                        <p className={paymentResult.info_item}>Loading...</p>
                    ) : error ? (
                        <p className={paymentResult.info_item}>Error: {error}</p>
                    ) : (
                        <div className={paymentResult.info_item}>
                            <p>訂單號碼: {merchantTradeNo}</p>
                            <p>付款成功！</p>
                        </div>
                    )}
                </div>
            </div>
            <FooterIn />
        </div>
    );
};

export default PaymentResult;
