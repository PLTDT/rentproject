
import React, { useState, useEffect } from "react";
import axios from 'axios';
import rent from '../styles/Rent.module.css';
import {useNavigate} from 'react-router-dom';
import FooterIn from '../components/FooterIn';
import PageHeaderIn from '../components/PageHeaderIn';

const RentForm = () => {
    const [data, setData] = useState(null); // State to store fetched data
    const [error, setError] = useState(null);
    
    const user = JSON.parse(localStorage.getItem('user'));
    const cemail=user.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/rentform/getrentcar?email=${cemail}`); // Make a GET request
                setData(response.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the function when the component mounts
    }, [cemail]);

    const navigate = useNavigate();

    const handleRowClick = (rowData) => {
        navigate('/Pay', { state: { rowData } });
    };

    return (
        <div>
            <PageHeaderIn />
            <div className={rent.form_bg}>
                <div className={rent.container2}>
                    {error ? (
                    <p>發生錯誤{error}</p>
                ) : data ? (
                <div>
                    <h2 className={rent.form_title}>訂單紀錄</h2>
                    <table className={rent.form_table}>
                        <thead>
                            <tr>
                                <th className={rent.form_thead}>租車地點</th>
                                <th className={rent.form_thead}>還車地點</th>
                                <th className={rent.form_thead}>租車日期</th>
                                <th className={rent.form_thead}>還車日期</th>
                                <th className={rent.form_thead}>車型</th>
                                <th className={rent.form_thead}>人數</th>
                                <th className={rent.form_thead}>折扣碼</th>
                                <th className={rent.form_thead}>貴賓姓名</th>
                                <th className={rent.form_thead}>貴賓信箱</th>
                                <th className={rent.form_thead}>狀態</th>
                            </tr>
                        </thead>
                        <tbody className={rent.form_tbody}>
                            {data && data.map((item) => (
                                <tr key={item.formid}>
                                    <td className={rent.form_none}>{item.formid}</td>
                                    <td className={rent.form_tbody}>{item.rentplace}</td>
                                    <td className={rent.form_tbody}>{item.returnplace}</td>
                                    <td className={rent.form_tbody}>{item.rentdate}</td>
                                    <td className={rent.form_tbody}>{item.returndate}</td>
                                    <td className={rent.form_tbody}>{item.carbrand}</td>
                                    <td className={rent.form_tbody}>{item.passenger}</td>
                                    <td className={rent.form_tbody}>{item.couponcode}</td>  
                                    <td className={rent.form_tbody}>{item.customername}</td>
                                    <td className={rent.form_tbody}>{item.customeremail}</td>
                                    <td><button className={rent.button} formTarget="_blank" onClick={(e) => {
                                                                                                            e.stopPropagation();
                                                                                                            handleRowClick(item); }}>結帳</button></td>
                                    <td><button className={rent.button}>取消訂單</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <FooterIn />
        </div>
    );
};

export default RentForm;
