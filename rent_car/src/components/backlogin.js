import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backlogin from '../styles/backlogin.module.css';  // 使用 CSS 模組

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
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
  

  // 控制註冊表單的顯示與隱藏
  const toggleRegister = () => {
    setIsRegisterOpen(!isRegisterOpen);
  };

  // 處理註冊提交
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const registerName = e.target.registerName.value;
    const registerPassword = e.target.registerPassword.value;
    const registerPosition = e.target.registerPosition.value;
    const registerDep = e.target.registerDep.value;

    const registerData = {
      employee_name: registerName,
      employee_password: registerPassword,
      employee_position: registerPosition,
      employee_dep: registerDep,
    };

    try {
      const response = await fetch('http://localhost:8080/daniel5/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registerData),
      });

      if (response.ok) {
        const result = await response.text();
        alert(result);  // 顯示註冊成功或失敗的訊息
      } else {
        alert('註冊失敗');
      }
    } catch (error) {
      console.error('註冊時發生錯誤:', error);
      alert('註冊時發生錯誤');
    }

    setIsRegisterOpen(false);
  };

  return (
    <div className={backlogin.body}>
      <div className={backlogin.login_container}>
        <h2>後台管理系統登入</h2>
        <form onSubmit={handleSubmit} className={backlogin.loginForm}>
          <div className={backlogin.input_group}>
            <label htmlFor="username">帳號</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={backlogin.input_group}>
            <label htmlFor="password">密碼</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={backlogin.login_button}>登入</button>
        </form>
        

        {isRegisterOpen && (
          <div className={backlogin.register_modal}>
            <div className={backlogin.register_content}>
              <h3>註冊新帳號</h3>
              <form onSubmit={handleRegisterSubmit}>
                <div className={backlogin.input_group}>
                  <label htmlFor="registerName">姓名</label>
                  <input
                    type="text"
                    id="registerName"
                    name="registerName"
                    required
                  />
                </div>
                <div className={backlogin.input_group}>
                  <label htmlFor="registerPassword">密碼</label>
                  <input
                    type="password"
                    id="registerPassword"
                    name="registerPassword"
                    required
                  />
                </div>
                <div className={backlogin.input_group}>
                  <label htmlFor="registerPosition">職位</label>
                  <input
                    type="text"
                    id="registerPosition"
                    name="registerPosition"
                    required
                  />
                </div>
                <div className={backlogin.input_group}>
                  <label htmlFor="registerDep">部門</label>
                  <input
                    type="text"
                    id="registerDep"
                    name="registerDep"
                    required
                  />
                </div>
                <button type="submit" className={backlogin.register_submit_button}>註冊</button>
                <button type="button" onClick={toggleRegister} className={backlogin.close_button}>關閉</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
