import React from "react";
import register from "../styles/Register.module.css";
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
                return response.data.exists; // 返回 email 是否存在的狀態
            } else {
                console.error("Unexpected response structure", response.data);
                return false;
            }
        } catch (err) {
            console.error("Email check failed", err.message); // 輸出具體錯誤信息
            return false; // 發生錯誤時假設 email 不存在
        }
    }
    

    // 處理註冊表單提交的函數
    async function registeraction(event) {
        event.preventDefault(); // 防止表單默認行為（刷新頁面）
        
        // 驗證密碼是否匹配
        if (password !== secondPassword) {
            setError("密碼與再次確認密碼不匹配！");
            return;
        }

        // 檢查 email 是否已被註冊
        const emailExists = await checkEmailExists(email);
        if (emailExists) {
            setError("該 email 已被註冊！");
            return;
        }

        try {
            // 發送 POST 請求進行註冊
            await axios.post("http://tongbro.ddns.net:8080/api/v1/employee/registeraction", {
                employeename: employeename,
                email: email,
                password: password,
            });
            alert("註冊成功，歡迎加入我們！"); // 註冊成功後顯示提示
            closeRegister(); // 提交成功後關閉註冊表單
        } catch (err) {
            alert("註冊過程中出錯，請稍後再試。"); // 錯誤處理
        }
    }

    // 返回註冊表單的 JSX
    return (
        <div className={register.modal}>
            <div className={register.form_container}>
                <form className={register.centered_form} onSubmit={registeraction}>
                    <h2>註冊</h2>
                    
                    {/* Email 輸入欄位 */}
                    <label htmlFor="email">Email：</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="請輸入Email"
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        required
                    />
                    
                    {/* 密碼輸入欄位 */}
                    <label htmlFor="password">密碼：</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="請輸入密碼"
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        required
                    />
                    
                    {/* 再次確認密碼輸入欄位 */}
                    <label htmlFor="secondpassword">再次確認密碼：</label>
                    <input
                        type="password"
                        id="secondpassword"
                        name="secondpassword"
                        placeholder="請再次輸入密碼"
                        value={secondPassword}
                        onChange={(event) => {
                            setSecondPassword(event.target.value);
                        }}
                        required
                    />
                    
                    {/* 姓名輸入欄位 */}
                    <label htmlFor="name">姓名：</label>
                    <input
                        type="text"
                        id="employeename"
                        name="employeename"
                        placeholder="輸入姓名"
                        value={employeename}
                        onChange={(event) => {
                            setEmployeename(event.target.value);
                        }}
                        required
                    />
                    
                    {/* 顯示錯誤訊息 */}
                    {error && <p className={register.error}>{error}</p>}
                    
                    {/* 提交按鈕 */}
                    <button className={register.registerbtn} type="submit">
                        送出
                    </button>
                    
                    {/* 關閉按鈕 */}
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
