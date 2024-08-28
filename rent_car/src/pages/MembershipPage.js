import React from 'react';
import Backstagechange from '../components/Backstagechange'; // 匯入 OrderInfo 元件
import Membership from '../components/Membership';
import Navbar from '../components/Navbar';
const MembershipPage = () => {
  return (
    <div>
      < Navbar />
      <Backstagechange />
      <Membership />
    </div>
  );
};

export default MembershipPage;
