import React from 'react';
import Backstagechange from '../backcomponents/Backstagechange'; // 匯入 OrderInfo 元件
import Membership from '../backcomponents/Membership';
import Navbar from '../backcomponents/Navbar';
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
