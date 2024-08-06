import React from 'react';
import '../styles/Login.css';
const Login = () => {
    return (
        <div className="form-container">
            <form className="centered-form">
                <h2>登入</h2>

                <label for="email">電子郵件：</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">密碼：</label>
                <input type="password" id="password" name="password" />

                <button type="submit">登入</button>
            </form>
        </div>
    );
};

export default Login;
