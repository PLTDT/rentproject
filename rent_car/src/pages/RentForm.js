import React, { useState, useEffect } from "react";
import axios from 'axios';
import rent from '../styles/Rent.module.css';
import { useNavigate } from 'react-router-dom';
import FooterIn from '../components/FooterIn';
import PageHeaderIn from '../components/PageHeaderIn';

const RentForm = () => {
    const [data, setData] = useState([]); // 初始化為空數組
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const user = JSON.parse(localStorage.getItem('user'));
    const cemail = user.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/rentform/getrentcar?email=${cemail}`);
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("無法加載數據");
            } finally {
                setLoading(false);
            }
        };
        
    
        fetchData();
    }, [cemail]);
    

    const navigate = useNavigate();

    const handleRowClick = (rowData) => {
        if (!rowData.deleted) {
            navigate('/Pay', { state: { rowData } });
        }
    };

    const handleDeleteClick = async (formid) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/v1/rentform/delete/${formid}`);
            if (response.status === 200) {
                alert("訂單已成功取消");
                // 更新訂單狀態
                setData(prevData => {
                    const updatedData = prevData.map(item =>
                        item.formid === formid ? { ...item, deleted: true } : item
                    );
                    console.log("Updated data after delete:", updatedData); // Debugging line
                    return updatedData;
                });
            }
        } catch (error) {
            console.error("Error deleting order:", error);
            alert("刪除訂單時出錯");
        }
    };

    return (
        <div>
            <PageHeaderIn />
            <div className={rent.form_bg}>
                <div className={rent.container2}>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>發生錯誤: {error}</p>
                    ) : (
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
                                        <th className={rent.form_thead}>操作</th>
                                    </tr>
                                </thead>
                                <tbody className={rent.form_tbody}>
                                    {data.map((item) => (
                                        <tr key={item.formid} className={item.deleted ? rent.deleted : ''}>
                                            <td className={rent.form_tbody}>{item.rentplace}</td>
                                            <td className={rent.form_tbody}>{item.returnplace}</td>
                                            <td className={rent.form_tbody}>{item.rentdate}</td>
                                            <td className={rent.form_tbody}>{item.returndate}</td>
                                            <td className={rent.form_tbody}>{item.carbrand}</td>
                                            <td className={rent.form_tbody}>{item.passenger}</td>
                                            <td className={rent.form_tbody}>{item.couponcode}</td>
                                            <td className={rent.form_tbody}>{item.customername}</td>
                                            <td className={rent.form_tbody}>{item.customeremail}</td>
                                            <td className={rent.status}>{item.deleted ? '已取消' : '未付款'}</td>
                                            <td>
                                                <button 
                                                    className={rent.button} 
                                                    onClick={() => handleRowClick(item)}
                                                    disabled={item.deleted}
                                                >
                                                    結帳
                                                </button>
                                            </td>
                                            <td>
                                                <button 
                                                    className={rent.button} 
                                                    onClick={() => handleDeleteClick(item.formid)}
                                                    disabled={item.deleted}
                                                >
                                                    取消訂單
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>


                            </table>
                        </div>
                    )}
                </div>
            </div>
            <FooterIn />
        </div>
    );
};

export default RentForm;
