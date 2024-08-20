import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import backstage from '../styles/Backstage.module.css';

const Backstage = () => {
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
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setOrders(data);
          setFilteredOrders(data); // 初始化時顯示所有訂單
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [activeSection]);

  const handleSearch = () => {
    const results = orders.filter(order =>
      order.訂單編號.includes(searchTerm) || order.客戶名稱.includes(searchTerm) // 根據訂單編號或客戶名稱進行篩選
    );
    setFilteredOrders(results); // 更新篩選後的訂單
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
          <div className={backstage.ordersdashboard}>
            <h2>訂單資料</h2>
            <div className={backstage.search_div}>
              <button onClick={handleSearch}>訂單搜尋</button> {/* 搜尋按鈕 */}
              <input 
                type="text" 
                className='input' 
                placeholder='請輸入訂單編號或會員名稱' 
                value={searchTerm} 
                onChange={e => setSearchTerm(e.target.value)} // 更新搜尋詞
              />
            </div>
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
                {filteredOrders.map((order) => (
                  <tr key={order.訂單編號}>
                    <td>{order.訂單編號}</td>
                    <td>{order.客戶名稱}</td>
                    <td>{order.訂單日期}</td>
                    <td>{order.總金額}</td>
                    <td>{order.狀態}</td>
                    <td>
                      <button
                        className={backstage.button}
                        onClick={() => navigate(`/order/${order.訂單編號}`)}
                      >
                        View
                      </button>
                      <button
                        className={backstage.button}
                        onClick={() => navigate(`/order/edit/${order.訂單編號}`)}
                      >
                        Edit
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
    <div className={backstage.container}>
      <aside>
        <ul>
          <li>
            <button
              className={activeSection === 'members' ? backstage.active : ''}
              onClick={() => {
                setActiveSection('members');
                navigate('/Membership');
              }}
            >
              會員資料
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'employeeInfo' ? backstage.active : ''}
              onClick={() => {
                setActiveSection('employeeInfo')
                navigate('/employeesInfo')
              }}
            >
              員工資訊
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'orders' ? backstage.active : ''}
              onClick={() => setActiveSection('orders')}
            >
              訂單資料
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'home' ? backstage.active : ''}
              onClick={() => {
                window.location.href = 'http://tongbro.ddns.net/HomePage';
              }}
            >
              回首頁
            </button>
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
