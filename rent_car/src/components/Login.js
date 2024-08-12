import React from 'react';
import '../styles/Login.css';
const Login = () => {
    return (
        <div className="form-container">
            <form className="centered-form">
                <h2>登入</h2>

                <label for="email">Email：</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="請輸入Email"
                />

                <label htmlFor="password">密碼：</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="請輸入密碼"
                />

                <button type="submit">確定登入</button>
            </form>
        </div>
    );
};

export default Login;
