import React, { useState, useEffect } from 'react';
import backstage from '../styles/Backstage.module.css';  // 引入 CSS 模塊

const Backstage = () => {
  const [activeSection, setActiveSection] = useState('orders'); // 用於追踪當前選中的部分（如訂單、會員等）
  const [orders, setOrders] = useState([]); // 保存從 API 獲取的訂單數據

  // 使用 useEffect 鉤子從 Spring Boot API 獲取數據
  useEffect(() => {
    if (activeSection === 'orders') {
      fetch('http://localhost:8080/daniel/getallorders')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok'); // 如果響應不成功，拋出錯誤
          }
          return response.json(); // 將響應轉換為 JSON
        })
        .then(data => {
          console.log(data); // 打印數據以檢查訂單金額
          setOrders(data); // 將獲取的訂單數據設置到狀態中
        })
        .catch(error => console.error('Error fetching data:', error)); // 捕獲並打印錯誤
    }
  }, [activeSection]); // 當 activeSection 改變時重新執行該效果

  // 根據當前選中的部分渲染對應的內容
  const renderContent = () => {
    switch (activeSection) {
      case 'members':
        return <h2>會員資料</h2>; // 會員資料的內容
      case 'employees':
        return <h2>員工資料</h2>; // 員工資料的內容
      case 'orders':
      default:
        return (
          <>
            <h2>訂單資料</h2>
            <table className={backstage.ordersTable}>
              <thead>
                <tr>
                  <th>訂單編號</th>
                  <th>會員名稱</th>
                  <th>訂單日期</th>
                  <th>總金額</th>
                  <th>狀態</th>
                  <th>動作</th>
                </tr>
              </thead>
              <tbody>
                  {orders.map((order) => (
                    <tr key={order.訂單編號}>
                      <td>{order.訂單編號}</td>
                      <td>{order.客戶名稱}</td>
                      <td>{order.訂單日期}</td>
                      <td>{order.總金額}</td> {/* 直接顯示訂單金額 */}
                      <td>{order.status}</td>
                      <td>
                        <button className={backstage.button}>View</button> {/* 查看按鈕 */}
                        <button className={backstage.button}>Edit</button> {/* 編輯按鈕 */}
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
          </>
        );
    }
  };

  return (
    <div className={backstage.container}>
      <aside>
        <ul>
          <li>
            <a
              href="#"
              className={activeSection === 'members' ? backstage.active : ''}
              onClick={() => setActiveSection('members')}
            >
              會員資料
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === 'employees' ? backstage.active : ''}
              onClick={() => setActiveSection('employees')}
            >
              員工資料
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === 'orders' ? backstage.active : ''}
              onClick={() => setActiveSection('orders')}
            >
              訂單資料
            </a>
          </li>
        </ul>
      </aside>
      <div className={backstage.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Backstage;
