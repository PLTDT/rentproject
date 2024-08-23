import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import memberinfo from '../styles/MemberInfo.module.css';

const MemberInfo = () => {
    const [data, setData] = useState([]); // 初始狀態設為空數組
    const [error, setError] = useState(null);

    const user = JSON.parse(localStorage.getItem('user'));
    const cemail = user?.email;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://tongbro.ddns.net:8080/api/v1/memberinfo/getmemberinfo?email=${cemail}`);
                console.log('API response:', response.data); // 打印 API 返回的數據
                const result = Array.isArray(response.data) ? response.data : [response.data];
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
                setError(error);
            }
        };
        

        if (cemail) {
            fetchData(); // 組件掛載時調用函數
        }
    }, [cemail]);

    const navigate = useNavigate();

    return (
        <div className={memberinfo.info_bg}>
            <div className={memberinfo.container}>
                <div className={memberinfo.info_title}>會員資料</div>
                <div className={memberinfo.info}>
                    {/* 如果 data 中有數據，則進行映射並顯示 */}
                    {data.length > 0 ? data.map((item, index) => (
                        <div key={index} className={memberinfo.info_item}>
                            <div>
                                <p>電子信箱：{item.email}</p>
                            </div>
                            <div>
                                <p>姓名：{item.employeename}</p>
                            </div>
                            <div>
                                <p>電話：</p>
                                <p>{item.phone}</p>
                            </div>
                        </div>
                    )) : <p>無會員資訊。</p>}
                    {/* 顯示錯誤信息 */}
                    {error && <p>無法獲取會員資訊，請稍後再試。</p>}
                </div>
            </div>
        </div>
    );
}

export default MemberInfo;
