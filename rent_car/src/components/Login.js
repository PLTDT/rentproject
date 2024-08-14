import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import login from '../styles/Login.module.css';

const Login = ({ closeLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function loginaction(event) {
        event.preventDefault();
        try {
            await axios
                .post(
                    'http://tongbro.ddns.net:8080/api/v1/employee/loginaction',
                    {
                        email: email,
                        password: password,
                    },
                )
                .then(
                    (res) => {
                        console.log(res.data);

                        if (res.data.message == 'Email not exits') {
                            alert('信箱不存在!');
                        } else if (res.data.message == 'Login Success') {
                            alert('登入成功');
                            navigate('/HomePageIn');
                        } else {
                            alert('帳號或密碼不匹配!');
                        }
                    },
                    (fail) => {
                        console.error(fail); // Error!
                    },
                );
        } catch (err) {
            alert(err);
        }
    }

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
                        value={email}
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
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
                    />
                    <button
                        className={login.loginbtn}
                        type="submit"
                        onClick={loginaction}
                    >
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
