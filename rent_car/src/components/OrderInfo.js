import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderInfo from '../styles/OrderInfo.module.css';

const OrderInfoComponent = () => {  // 改變元件名稱以匹配檔案名稱
  const [activeSection, setActiveSection] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // 保存使用者輸入的搜尋詞
  const [filteredOrders, setFilteredOrders] = useState([]); // 保存篩選後的訂單
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
          setFilteredOrders(data); // 初始化時顯示所有訂單
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
  

  const renderContent = () => {
    switch (activeSection) {
      case 'members':
        return <h2>會員資料</h2>;
      case 'employees':
        return <h2>員工資料</h2>;
      case 'orders':
      default:
        return (
          <div className={OrderInfo.ordersdashboard}>
            <h2>訂單資料</h2>
            <div className={OrderInfo.search_div}>
            <button onClick={handleSearch} className={OrderInfo.button}>搜尋訂單</button> {/* 搜尋按鈕 */}
              <input 
                type="text" 
                className='input' 
                placeholder='請輸入訂單編號或會員名稱' 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} // 更新搜尋詞
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
                  <th>會員電話</th>
                  <th>總金額</th>
                  <th>狀態</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.car_id}>
                    <td>{order.payid}</td> {/* 客戶編號 */}
                    <td>{order.form_id}</td> {/* 訂單編號 */}
                    <td>{order.pay_date}</td> {/* 人數 */}
                    <td>{order.rent_date}</td> {/* 租借日期 */}
                    <td>{order.return_date}</td> {/* 歸還日期 */}
                    <td>{order.total_days}</td> {/* 汽車品牌 */}
                    <td>{order.car_brand}</td> {/* 租借地點 */}
                    <td>{order.customer_name}</td> {/* 會員名稱 */}
                    <td>{order.customer_email}</td>{/* 會員電話 */}
                    <td>{order.total}</td> {/* 總金額 */} 
                    <td>{order.paymethod}</td> {/* 狀態 */}
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
