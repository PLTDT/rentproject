import React from 'react';
import Backstagechange from '../components/Backstagechange'; // 匯入 OrderInfo 元件
import Membership from '../components/Membership';

const MembershipPage = () => {
  return (
    <div>
      <Backstagechange />
      <Membership />
    </div>
  );
};

export default MembershipPage;
