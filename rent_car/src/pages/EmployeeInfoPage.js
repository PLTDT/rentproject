import React from 'react';
import Backstagechange from '../components/Backstagechange'; // 匯入 OrderInfo 元件
import EmployeesInfo from '../components/EmployeesInfo';
import Navbar from '../components/Navbar';
const MembershipPage = () => {
  return (
    <div>
      < Navbar />
      <Backstagechange />
      <EmployeesInfo />
    </div>
  );
};

export default MembershipPage;
