import React from 'react';
import Backstagechange from '../components/Backstagechange'; // 匯入 OrderInfo 元件
import EmployeesInfo from '../components/EmployeesInfo';
import Dashboard from '../components/Dashboard';
import Navbar from '../components/Navbar';

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
