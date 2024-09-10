import React from 'react';
import Backstagechange from '../backcomponents/Backstagechange'; // 匯入 OrderInfo 元件
import Dashboard from '../backcomponents/Dashboard';
import Navbar from '../backcomponents/Navbar';

const DashboardInfoPage = () => {
  return (
    <div>
      <Navbar/>
      <Backstagechange />
      <Dashboard/>
    
    </div>
  );
};

export default DashboardInfoPage;
