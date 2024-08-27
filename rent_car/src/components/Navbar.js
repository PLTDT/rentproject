import React from 'react';
import navbar from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div className={navbar.navbar}>
      <h1>My Dashboard</h1>
      <div className={navbar.profile}>
        <p>User Profile</p>
      </div>
    </div>
  );
}

export default Navbar;
