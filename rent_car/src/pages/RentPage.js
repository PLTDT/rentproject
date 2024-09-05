import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeaderIn from '../components/PageHeaderIn';
import Rent from '../components/Rent';
import FooterIn from '../components/FooterIn';
import axios from 'axios';

const RentPage = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    navigate('/HomePage');
                    return;
                }

                // 驗證 token 是否有效
                await axios.get('https://tongbro.ddns.net:8080/api/v1/employee/validateToken', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // 重置 token 的過期時間
                const response = await axios.post('https://tongbro.ddns.net:8080/api/v1/employee/resetToken?timestamp=' + new Date().getTime(), {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // 確保儲存更新後的 token
                const newToken = response.data.token;
                if (newToken !== token) {
                    localStorage.setItem('token', newToken);
                }

                setLoading(false);
            } catch (err) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                alert('連線過時，請重新登入');
                navigate('/HomePage');
            }
        };

        checkToken();
    }, [navigate]);

    if (loading) {
        return <div>加載中...</div>;
    }

    return (
        <div>
            <PageHeaderIn />
            <Rent />
            <FooterIn />
        </div>
    );
};

export default RentPage;
