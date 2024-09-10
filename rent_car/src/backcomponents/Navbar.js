import React from 'react';
import navbar from '../styles/Navbar.module.css';

function Navbar() {
  const username = localStorage.getItem('username'); // 從 localStorage 讀取使用者名稱

  return (
    <div className={navbar.navbar}>
      <div className={navbar.title}>GoRent後台管理系統</div>
    </div>
  );
}

export default Navbar;
