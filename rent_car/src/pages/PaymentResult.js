import React, { useEffect, useState } from "react";
import PageHeaderIn from "../components/PageHeaderIn";
import FooterIn from "../components/FooterIn";
import axios from "axios";

const PaymentResult = () => {
    const [payresult, setPayresult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/paymentResult");
                setPayresult(response.data);
            } catch (error) {
                // 更安全地处理错误信息
                const errorMessage = error.response?.data?.message || error.message || "未知錯誤";
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <PageHeaderIn />
            <h1>Payment Result</h1>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : payresult ? (
                <ul>
                    {Object.entries(payresult).map(([key, value]) => (
                        <li key={key}>
                            {key}: {typeof value === 'object' ? JSON.stringify(value) : value}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No data available</p>
            )}
            <FooterIn />
        </div>
    );
};

export default PaymentResult;
