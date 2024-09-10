import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/backlogin.module.css';  // 使用 CSS 模組

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 處理登入
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const loginData = {
      username,
      password,
    };
  
    try {
      const response = await fetch('http://localhost:8080/daniel5/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
  
      // 檢查 HTTP 狀態碼
      if (response.ok) {
        const result = await response.text(); // 從後端獲取回應訊息
        if (result === "登入成功") {
          navigate('/DashboardInfoPage'); // 登入成功後跳轉
        } else {
          alert(result); // 顯示登入失敗的具體訊息
        }
      } else {
        alert('登入失敗，請檢查帳號或密碼'); // 如果 HTTP 狀態碼不是 200
      }
    } catch (error) {
      console.error('登入時發生錯誤:', error);
      alert('登入時發生錯誤');
    }
  
    setUsername('');
    setPassword('');
  };

  return (
    <div className={styles.body}>
      <div className={styles.login_container}>
        <div className={styles.login_title}>後台管理系統登入</div>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <div className={styles.input_group}>
            <label htmlFor="username">帳號</label>
            <input
            className={styles.input}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.input_group}>
            <label htmlFor="password">密碼</label>
            <input
            className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.login_button}>登入</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
