import React from 'react';
import Navbar from '../backcomponents/Navbar';
import OrderInfo from '../backcomponents/OrderInfo'; // 
import Backstagechange from '../backcomponents/Backstagechange'; // 匯入 OrderInfo 元件

const OrderInfoPage = () => {
  return (
    <div>
      <Navbar/>
      <Backstagechange />
      <OrderInfo />
    </div>
  );
};

export default OrderInfoPage;
