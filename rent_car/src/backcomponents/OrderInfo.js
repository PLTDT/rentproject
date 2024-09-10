import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderInfo from '../styles/OrderInfo.module.css';

const OrderInfoComponent = () => {
  const [activeSection, setActiveSection] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOrders, setFilteredOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeSection === 'orders') {
      fetch('http://localhost:8080/daniel/getallorders')
        .then(response => {
          if (!response.ok) {
            throw new Error('網路回應不正確');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setOrders(data);
          setFilteredOrders(data);
        })
        .catch(error => console.error('獲取數據時出錯:', error));
    }
  }, [activeSection]);

  const handleSearch = () => {
    const results = orders.filter(order =>
      (order.form_id?.includes(searchTerm) || order.customer_name?.includes(searchTerm))
    );
    setFilteredOrders(results);
  };

  const handleDelete = (form_id) => {
    fetch(`http://localhost:8080/daniel/deleteorder/${form_id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('刪除訂單失敗');
        }
        // 更新訂單列表，過濾掉已刪除的訂單
        setOrders(orders.filter(order => order.form_id !== form_id));
        setFilteredOrders(filteredOrders.filter(order => order.form_id !== form_id));
      })
      .catch(error => console.error('刪除訂單時出錯:', error));
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'members':
        return <div className={OrderInfo.title}>會員資料</div>;
      case 'employees':
        return <div className={OrderInfo.title}>員工資料</div>;
      case 'orders':
      default:
        return (
          <div className={OrderInfo.ordersdashboard}>
            <div className={OrderInfo.title}>訂單資料</div>
            <div className={OrderInfo.search_div}>
              <button onClick={handleSearch} className={OrderInfo.button}>搜尋訂單</button>
              <input 
                type="text" 
                className={OrderInfo.input} 
                placeholder='請輸入訂單編號或會員名稱' 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} 
              />
            </div>
            <table className={OrderInfo.ordersTable}>
              <thead>
                <tr>
                  <th>項次</th>
                  <th>訂單編號</th>
                  <th>付款日期</th>
                  <th>租借日期</th>
                  <th>歸還日期</th>
                  <th>租借天數</th>
                  <th>汽車品牌</th>
                  <th>會員名稱</th>
                  <th>會員EMAIL</th>
                  <th>總金額</th>
                  <th>狀態</th>
                  <th>操作</th> {/* 新增操作欄位 */}
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order, index) => (
                  <tr key={order.form_id}>
                    <td>{index + 1}</td>
                    <td>{order.form_id}</td>
                    <td>{order.pay_date}</td>
                    <td>{order.rent_date}</td>
                    <td>{order.return_date}</td>
                    <td>{order.total_days}</td>
                    <td>{order.car_brand}</td>
                    <td>{order.customer_name}</td>
                    <td>{order.customer_email}</td>
                    <td>{order.total}</td>
                    <td>{order.paymethod}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(order.form_id)} 
                        className={OrderInfo.button}
                      >
                        刪除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className={OrderInfo.content}>
      {renderContent()}
    </div>
  );
};

export default OrderInfoComponent;
