import React from 'react';
import '../styles/Register.css';
const Register = () => {
    return (
        <div className="form-container">
            <form className="centered-form">
                <h2>註冊</h2>
                <label for="email">姓名：</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="請輸入姓名"
                />

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

                <button type="submit">確定註冊</button>
            </form>
        </div>
    );
};

export default Register;
