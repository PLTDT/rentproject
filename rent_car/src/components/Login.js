import React from "react";
import login from "../styles/Login.module.css";

const Login = ({ closeLogin }) => {
    return (
        <div className={login.modal}>
            <div className={login.form_container}>
                <form className={login.centered_form}>
                    <h2>登入</h2>
                    <label htmlFor="email">Email：</label>
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
