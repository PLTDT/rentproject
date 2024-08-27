import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Backstagechange from '../styles/Backstagechange.module.css';

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
    <div className={Backstagechange.container}>
      <aside className={Backstagechange.aside_info}>
        <ul>
        <li>
            <button
              className={` ${activeSection === 'members' ? Backstagechange.active : ''}`}
              onClick={() => {
                  setActiveSection('members');
                  navigate('/MembershipPage');
              }}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              className={` ${activeSection === 'members' ? Backstagechange.active : ''}`}
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
              className={activeSection === 'employeeInfo' ? Backstagechange.active : ''}
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
              className={activeSection === 'orders' ? Backstagechange.active : ''}
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
              className={activeSection === 'home' ? Backstagechange.active : ''}
              onClick={() => {
                window.location.href = 'http://tongbro.ddns.net/HomePage';
              }}
            >
              回前台
            </button>
          </li>
        </ul>
      </aside>
      <div className={Backstagechange.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default BackstagechangeComponent;
