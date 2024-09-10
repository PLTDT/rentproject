import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Backstagechange.module.css';

const BackstagechangeComponent = () => {
  const [activeSection, setActiveSection] = useState('');
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeSection) {
      case 'members':
        return <div></div>;
      case 'employeeInfo':
        return <div></div>;
      case 'orders':
        return <div></div>;
      default:
        return <div></div>;
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.aside_info}>
        <ul>
          <li>
            <button
              className={activeSection === 'members' ? styles.active : ''}
              onClick={() => {
                setActiveSection('members');
                navigate('/DashboardInfoPage');
              }}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'members' ? styles.active : ''}
              onClick={() => {
                setActiveSection('members');
                navigate('/MembershipPage');
              }}
            >
              會員資料
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'employeeInfo' ? styles.active : ''}
              onClick={() => {
                setActiveSection('employeeInfo');
                navigate('/EmployeeInfoPage');
              }}
            >
              員工資訊
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'orders' ? styles.active : ''}
              onClick={() => {
                setActiveSection('orders');
                navigate('/OrderInfoPage');
              }}
            >
              訂單資料
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'home' ? styles.active : ''}
              onClick={() => {
                window.location.href = 'https://tongbro.ddns.net:443/HomePage';
              }}
            >
              回前台
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'logout' ? styles.active : ''}
              onClick={() => {
                // 清除登入時存儲的使用者資料
                localStorage.removeItem('username');

                // 導向登入頁面
                navigate('/');

                // 重置頁面狀態
                setActiveSection('logout');
              }}
            >
              登出
            </button>
          </li>
        </ul>
      </aside>
      <div className={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default BackstagechangeComponent;
