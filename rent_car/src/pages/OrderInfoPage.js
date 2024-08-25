import React from 'react';
import OrderInfo from '../components/OrderInfo'; // 
import Backstagechange from '../components/Backstagechange'; // 匯入 OrderInfo 元件

const OrderInfoPage = () => {
  return (
    <div>
      <Backstagechange />
      <OrderInfo />
    </div>
  );
};

export default OrderInfoPage;
