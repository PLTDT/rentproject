import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import login from '../styles/Login.module.css';

const Login = ({ closeLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function loginaction(event) {
        event.preventDefault();
        try {
            const response = await axios.post("http://tongbro.ddns.net:8080/api/v1/employee/loginaction", {
                email: email,
                password: password,
            });

            console.log(response.data);

            if (response.data.message === "Email not exists") {
                alert("信箱不存在!");
            } else if (response.data.message === "Login Success") {
                localStorage.setItem('token', response.data.token); // 儲存 token
                alert("登入成功");
                navigate('/HomePageIn'); // 導航到受保護的頁面
            } else {
                alert("帳號或密碼不匹配!");
            }
        } catch (err) {
            alert("登入失敗: " + err.message);
        }
    }

    return (
        <div className={login.modal}>
            <div className={login.form_container}>
                <form className={login.centered_form} onSubmit={loginaction}>
                    <h2>登入</h2>
                    <label htmlFor="email">Email：</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="請輸入Email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label htmlFor="password">密碼：</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="請輸入密碼"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <button className={login.loginbtn} type="submit">
                        登入
                    </button>
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


