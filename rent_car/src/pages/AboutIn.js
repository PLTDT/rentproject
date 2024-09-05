import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeaderIn from '../components/PageHeaderIn'; 
import FooterIn from '../components/FooterIn'; 
import Section1 from '../components/Section1'; 
import axios from 'axios';

const AboutIn = () => {
    const [loading, setLoading] = useState(true); // 設定加載狀態
    const navigate = useNavigate(); // 用於導航的 hook

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = localStorage.getItem('token'); // 從 localStorage 獲取 token
                if (!token) {
                    navigate('/HomePage'); // 如果沒有 token，重定向到 HomePage
                    return;
                }

                // 驗證 token 是否有效
                const validateResponse = await axios.get('https://tongbro.ddns.net:8080/api/v1/employee/validateToken', {
                    headers: {
                        Authorization: `Bearer ${token}`, // 設置 Authorization 標頭
                    },
                });

                if (validateResponse.status === 200) {
                    // 如果 token 有效，重置 token 的過期時間
                    try {
                        const refreshResponse = await axios.post('https://tongbro.ddns.net:8080/api/v1/employee/resetToken?timestamp=' + new Date().getTime(), {}, {
                            headers: {
                                Authorization: `Bearer ${token}`, // 設置 Authorization 標頭
                            },
                        });

                        // 更新本地儲存中的 token
                        localStorage.setItem('token', refreshResponse.data.token);
                    } catch (refreshError) {
                        // 處理 token 更新失敗的錯誤
                        localStorage.removeItem('token'); // 刪除無效的 token
                        localStorage.removeItem('user'); // 刪除用戶信息
                        alert('Token 更新失敗，請重新登入'); // 提示用戶
                        navigate('/HomePage'); // 重定向到 HomePage
                        return;
                    }
                }

                setLoading(false); // 設置加載完成
            } catch (err) {
                // 處理 token 驗證錯誤
                localStorage.removeItem('token'); // 刪除無效的 token
                localStorage.removeItem('user'); // 刪除用戶信息
                alert('連線過時，請重新登入'); // 提示用戶
                navigate('/HomePage'); // 重定向到 HomePage
            }
        };

        checkToken();
    }, [navigate]); // 依賴於 navigate，當其變化時重新執行 useEffect

    if (loading) {
        return <div>加載中...</div>; // 顯示加載中的提示
    }

    return (
        <div>
            <PageHeaderIn />
            <Section1 />
            <FooterIn />
        </div>
    );
}

export default AboutIn;
