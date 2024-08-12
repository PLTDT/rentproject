import React from "react";
import register from "../styles/Register.module.css";
const Register = ({ closeRegister }) => {
    return (
        <div className={register.modal}>
            <div className={register.form_container}>
                <form className={register.centered_form}>
                    <h2>註冊</h2>
                    <label htmlFor="email">Email：</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="請輸入Email"
                        required
                    />
                    <label htmlFor="password">密碼：</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="請輸入密碼"
                        required
                    />
                    <label htmlFor="secondpassword">再次確認密碼：</label>
                    <input
                        type="password"
                        id="secondpassword"
                        name="secondpassword"
                        placeholder="請再次輸入密碼"
                        required
                    />
                    <label htmlFor="name">姓名：</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="輸入姓名"
                        required
                    />
                    <label htmlFor="phonenumber">行動電話：</label>
                    <input
                        type="text"
                        id="phonenumber"
                        name="phonenumber"
                        placeholder="09xxxxxxxx"
                        required
                    />
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
