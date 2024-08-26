import React from 'react';
import Backstagechange from '../components/Backstagechange'; // 匯入 OrderInfo 元件
import EmployeesInfo from '../components/EmployeesInfo';

const MembershipPage = () => {
  return (
    <div>
      <Backstagechange />
      <EmployeesInfo />
    </div>
  );
};

export default MembershipPage;
