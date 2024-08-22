import React from "react";
import register from "../styles/Register.module.css"; // 引入樣式模組
import { useState } from "react";
import axios from "axios";

// 定義 Register 元件
const Register = ({ closeRegister }) => {
    // 設定狀態變數
    const [employeename, setEmployeename] = useState(""); // 姓名
    const [email, setEmail] = useState(""); // Email
    const [password, setPassword] = useState(""); // 密碼
    const [secondPassword, setSecondPassword] = useState(""); // 再次確認密碼
    const [error, setError] = useState(""); // 錯誤訊息

    // 檢查 email 是否已存在的函數
    async function checkEmailExists(email) {
        try {
            // 確保 email 參數被正確編碼
            const encodedEmail = encodeURIComponent(email);
            
            // 發送 GET 請求檢查 email 是否已被註冊
            const response = await axios.get(`http://tongbro.ddns.net:8080/api/v1/employee/check-email?email=${encodedEmail}`);
            
            // 確保 response.data 的結構符合預期
            if (response.data && typeof response.data.exists === 'boolean') {
                return response.data.exists; // 返回 email 是否存在的布林值
            } else {
                console.error("Unexpected response structure", response.data);
                return false; // 如果響應結構不符合預期，則返回 false
            }
        } catch (err) {
            console.error("Email check failed", err.message);
            return false; // 如果檢查過程出錯，則返回 false
        }
    }

    // 處理註冊表單提交的函數
    async function registeraction(event) {
        event.preventDefault(); // 阻止表單的默認提交行為
        
        // 驗證密碼是否匹配
        if (password !== secondPassword) {
            setError("密碼與再次確認密碼不匹配！");
            return; // 如果密碼不匹配，設置錯誤訊息並返回
        }

        // 檢查 email 是否已被註冊
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            setError("該 email 已被註冊！");
            return; // 如果 email 已被註冊，設置錯誤訊息並返回
        }

        try {
            // 發送 POST 請求進行註冊
            await axios.post("http://tongbro.ddns.net:8080/api/v1/employee/registeraction", {
                employeename: employeename,
                email: email,
                password: password,
            });
            alert("註冊成功，歡迎加入我們！");
            closeRegister(); // 註冊成功後關閉註冊表單
        } catch (err) {
            alert("註冊過程中出錯，請稍後再試。");
        }
    }

    // 密碼變化處理函數
    function handlePasswordChange(event) {
        const newPassword = event.target.value;
        setPassword(newPassword); // 更新密碼狀態

        if (newPassword !== secondPassword) {
            setError("密碼與再次確認密碼不匹配！");
        } else {
            setError(""); // 密碼匹配時清除錯誤訊息
        }
    }

    // 再次確認密碼變化處理函數
    function handleSecondPasswordChange(event) {
        const newSecondPassword = event.target.value;
        setSecondPassword(newSecondPassword); // 更新再次確認密碼狀態

        if (password !== newSecondPassword) {
            setError("密碼與再次確認密碼不匹配！");
        } else {
            setError(""); // 密碼匹配時清除錯誤訊息
        }
    }

    // 返回註冊表單的 JSX
    return (
        <div className={register.modal}>
            <div className={register.form_container}>
                <form className={register.centered_form} onSubmit={registeraction}>
                    <h2>註冊</h2>
                    
                    <label htmlFor="email">Email：</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="請輸入Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />
                    
                    <label htmlFor="password">密碼：</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="請輸入密碼"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                    
                    <label htmlFor="secondpassword">再次確認密碼：</label>
                    <input
                        type="password"
                        id="secondpassword"
                        name="secondpassword"
                        placeholder="請再次輸入密碼"
                        value={secondPassword}
                        onChange={handleSecondPasswordChange}
                        required
                    />
                    
                    <label htmlFor="name">姓名：</label>
                    <input
                        type="text"
                        id="employeename"
                        name="employeename"
                        placeholder="輸入姓名"
                        value={employeename}
                        onChange={(event) => setEmployeename(event.target.value)}
                        required
                    />
                    
                    {error && <p className={register.error}>{error}</p>} {/* 顯示錯誤訊息 */}
                    
                    <button className={register.registerbtn} type="submit">
                        送出
                    </button>
                    
                    <button
                        className={register.closebtn}
                        type="button"
                        onClick={closeRegister}
                    >
                        X
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
