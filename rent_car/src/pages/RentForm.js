import React, { useState, useEffect } from "react";
import axios from 'axios';
import rent from '../styles/Rent.module.css';
import { useNavigate } from 'react-router-dom';
import FooterIn from '../components/FooterIn';
import PageHeaderIn from '../components/PageHeaderIn';

const RentForm = () => {
    const [data, setData] = useState([]); // State to store fetched data
    const [error, setError] = useState(null); // State to store errors
    const [isLoading, setIsLoading] = useState(true); // State to handle loading
    const [currentPage, setCurrentPage] = useState(1); // State to manage the current page
    const recordsPerPage = 5; // Number of records per page

    const user = JSON.parse(localStorage.getItem('user'));
    const cemail = user.email;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://tongbro.ddns.net:8080/api/v1/rentform/getrentcar?email=${cemail}`);
                setData(response.data); // Update state with fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Error fetching data.");
            } finally {
                setIsLoading(false); // Set loading to false when data is fetched
            }
        };

        fetchData();
    }, [cemail]);

    const handleRowClick = (rowData) => {
        if (!rowData.isdeleted && rowData.paystatus !== '已付款') {
            navigate('/Pay', { state: { rowData } });
        }
    };

    async function deleteaction(formid) {
        try {
            await axios.post(`https://tongbro.ddns.net:8080/api/v1/rentform/deletedata`, null, { params: { formid } });
            // Refresh the data after deletion
            const response = await axios.get(`https://tongbro.ddns.net:8080/api/v1/rentform/getrentcar?email=${cemail}`);
            setData(response.data); // Update the state with the refreshed data
        } catch (error) {
            console.error("Error deleting data:", error);
            setError("Error deleting data.");
        }
    }

    // Pagination logic
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentData = data.slice(indexOfFirstRecord, indexOfLastRecord);

    const totalPages = Math.ceil(data.length / recordsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>; // Display loading message while fetching data
    }

    return (
        <div>
            <PageHeaderIn />
            <div className={rent.form_bg}>
                <div className={rent.container2}>
                    {error ? (
                        <p>發生錯誤: {error}</p>
                    ) : (
                        <div>
                            <h2 className={rent.form_title}>訂單紀錄</h2>
                            <table className={rent.form_table}>
                                <thead>
                                    <tr>
                                        <th className={rent.form_thead}>租車地點</th>
                                        <th className={`${rent.form_thead} d-none d-md-table-cell`}>還車地點</th>
                                        <th className={rent.form_thead}>租車日期</th>
                                        <th className={`${rent.form_thead} d-none d-md-table-cell`}>還車日期</th>
                                        <th className={rent.form_thead}>車型</th>
                                        <th className={`${rent.form_thead} d-none d-md-table-cell`}>人數</th>
                                        <th className={rent.form_thead}>貴賓姓名</th>
                                        <th className={`${rent.form_thead} d-none d-md-table-cell`}>貴賓信箱</th>
                                        <th className={rent.form_thead}>狀態</th>
                                        <th className={rent.form_thead}>操作</th>
                                    </tr>
                                </thead>
                                <tbody className={rent.form_tbody}>
                                    {currentData.length > 0 ? (
                                        currentData.map((item) => (
                                            <tr key={item.formid} className={item.isdeleted ? rent.deleted_row : ''}>
                                                <td className={rent.form_tbody}>{item.rentplace}</td>
                                                <td className={`${rent.form_tbody} d-none d-md-table-cell`}>{item.returnplace}</td>
                                                <td className={rent.form_tbody}>{item.rentdate}</td>
                                                <td className={`${rent.form_tbody} d-none d-md-table-cell`}>{item.returndate}</td>
                                                <td className={rent.form_tbody}>{item.carbrand}</td>
                                                <td className={`${rent.form_tbody} d-none d-md-table-cell`}>{item.passenger}</td>
                                                <td className={rent.form_tbody}>{item.customername}</td>
                                                <td className={`${rent.form_tbody} d-none d-md-table-cell`}>{item.customeremail}</td>
                                                <td className={rent.form_tbody}>
                                                    {item.paystatus}
                                                </td>
                                                <td className={rent.form_tbodybutton}>
                                                    <button
                                                        className={`${rent.button} ${item.isdeleted || item.paystatus === '已付款' ? rent.disabled_button : ''}`}
                                                        onClick={() => handleRowClick(item)}
                                                        disabled={item.isdeleted || item.paystatus === '已付款'}
                                                    >
                                                        結帳
                                                    </button>
                                                    <button
                                                        className={`${rent.button} ${item.isdeleted || item.paystatus === '已付款' ? rent.disabled_button : ''}`}
                                                        onClick={() => deleteaction(item.formid)}
                                                        disabled={item.isdeleted || item.paystatus === '已付款'}
                                                    >
                                                        取消訂單
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="10" className={rent.no_data}>無訂單記錄</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>

                            {/* Pagination Controls */}
                            <div className={rent.pagination}>
                                <button className={rent.prebutton} onClick={prevPage} disabled={currentPage === 1}>
                                    前一頁
                                </button>
                                <span className={rent.page}>Page {currentPage} of {totalPages}</span>
                                <button className={rent.nextbutton} onClick={nextPage} disabled={currentPage === totalPages}>
                                    下一頁
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <FooterIn />
        </div>
    );
};

export default RentForm;