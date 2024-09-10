import React from 'react';
import Backstagechange from '../backcomponents/Backstagechange'; // 匯入 OrderInfo 元件
import EmployeesInfo from '../backcomponents/EmployeesInfo';
import Navbar from '../backcomponents/Navbar';
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
