import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import login from '../styles/Login.module.css';

// 定義 Login 元件
const Login = ({ closeLogin }) => {
    // 設定狀態變數
    const [email, setEmail] = useState(""); // 儲存輸入的 email
    const [password, setPassword] = useState(""); // 儲存輸入的密碼
    const navigate = useNavigate(); // 用於導航到其他頁面

    // 處理登入表單提交的函數
    async function loginaction(event) {
        event.preventDefault(); // 防止表單默認行為（刷新頁面）
        try {
            // 發送 POST 請求進行登入
            const response = await axios.post("http://localhost:8080/api/v1/employee/loginaction", {
                email: email,
                password: password,
            });
    
            console.log(response.data); // 顯示響應數據到控制台
    
            // 根據返回的 message 顯示不同的提示
            if (response.data.message === "Email not exists") {
                alert("信箱不存在!");
            } else if (response.data.message === "Login Success") {
                // 登入成功，儲存 token 和 user 資訊到 localStorage
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.user));
                alert("登入成功");
                navigate('/HomePageIn'); // 導航到受保護的頁面
            } else {
                alert("帳號或密碼不匹配!");
            }
        } catch (err) {
            // 捕獲並顯示登入失敗的錯誤信息
            alert("登入失敗: " + err.message);
        }
    }
    
    // 返回登入表單的 JSX
    return (
        <div className={login.modal}>
            <div className={login.form_container}>
                <form className={login.centered_form} onSubmit={loginaction}>
                    <h2>登入</h2>
                    
                    {/* Email 輸入欄位 */}
                    <label htmlFor="email">Email：</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="請輸入Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    
                    {/* 密碼輸入欄位 */}
                    <label htmlFor="password">密碼：</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="請輸入密碼"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    
                    {/* 提交按鈕 */}
                    <button className={login.loginbtn} type="submit">
                        登入
                    </button>
                    
                    {/* 關閉按鈕 */}
                    <button
                        className={login.closebtn}
                        type="button"
                        onClick={closeLogin}
                    >
                        X
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
