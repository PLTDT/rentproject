
import React, { useState, useEffect } from "react";
import axios from 'axios';
import rent from '../styles/Rent.module.css';
import FooterIn from '../components/FooterIn';
import PageHeaderIn from '../components/PageHeaderIn';

const RentForm = () => {
    const [data, setData] = useState(null); // State to store fetched data
    const apiUrl = 'http://localhost:8080/api/v1/rentform/getrentcar';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl); // Make a GET request
                setData(response.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData(); // Call the function when the component mounts
    }, []);

    return (
        <div>
            <PageHeaderIn />
            <div className={rent.form_bg}>
                <div className={rent.container2}>
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
                                <th className={rent.form_thead}>刪除</th>
                            </tr>
                        </thead>
                        <tbody className={rent.form_tbody}>
                            {data && data.map((item) => (
                                <tr key={item.formid}>
                                    <td className={rent.form_tbody}>{item.rentplace}</td>
                                    <td className={rent.form_tbody}>{item.returnplace}</td>
                                    <td className={rent.form_tbody}>{item.rentdate}</td>
                                    <td className={rent.form_tbody}>{item.returndate}</td>
                                    <td className={rent.form_tbody}>{item.carbrand}</td>
                                    <td className={rent.form_tbody}>{item.passenger}</td>
                                    <td className={rent.form_tbody}>{item.couponcode}</td>  
                                    <td className={rent.form_tbody}>{item.customername}</td>
                                    <td className={rent.form_tbody}>{item.customeremail}</td>
                                    <td><button className={rent.button}>刪除</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <FooterIn />
        </div>
    );
};

export default RentForm;
