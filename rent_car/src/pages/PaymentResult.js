import React, { useEffect, useState } from "react";
import PageHeaderIn from "../components/PageHeaderIn";
import FooterIn from "../components/FooterIn";
import axios from "axios";

const PaymentResult = () => {
    const [payresult, setPayresult] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/pay/paymentResult`);
                setPayresult(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <PageHeaderIn />
            <h1>Payment Result</h1>
            {payresult ? (
                <ul>
                    {Object.entries(payresult).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
            <FooterIn />
        </div>
    );
};

export default PaymentResult;
