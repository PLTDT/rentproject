import React from "react";
import register from "../styles/Register.module.css";
import { useState } from "react";
import axios from "axios";

const Register = ({ closeRegister }) => {
    const [employeename, setEmployeename] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [secondPassword, setSecondPassword] = useState("");
    const [error, setError] = useState("");
    
    async function checkEmailExists(email) {
        try {
            const response = await axios.get(`http://tongbro.ddns.net:8080/api/v1/employee/check-email?email=${email}`);
            return response.data.exists;
        } catch (err) {
            console.error("Email check failed", err);
            return false;
        }
    }

    async function registeraction(event) {
        event.preventDefault();
        
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
            await axios.post("http://tongbro.ddns.net:8080/api/v1/employee/registeraction", {
                employeename: employeename,
                email: email,
                password: password,
            });
            alert("註冊成功，歡迎加入我們！");
            closeRegister(); // 提交成功後關閉註冊表單
        } catch (err) {
            alert("註冊過程中出錯，請稍後再試。");
        }
    }

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
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        required
                    />
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
                    {error && <p className={register.error}>{error}</p>}
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
