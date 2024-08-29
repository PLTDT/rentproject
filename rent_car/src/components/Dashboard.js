import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import DashboardStyles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  // 定義 state 來存儲會員、員工、訂單及篩選後的訂單數據
  const [members, setMembers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('all'); // 新增狀態來存儲選擇的月份
  
  useEffect(() => {
    // 獲取會員資料
    fetch('http://localhost:8080/daniel2/getallorders2')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setMembers(data); // 設置會員數據
      })
      .catch(error => console.error('Error fetching members:', error));

    // 獲取員工資料
    fetch('http://localhost:8080/daniel3/getallemployee3')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setEmployees(data); // 設置員工數據
      })
      .catch(error => console.error('Error fetching employees:', error));

    // 獲取訂單資料
    fetch('http://localhost:8080/daniel/getallorders')
      .then(response => {
        if (!response.ok) {
          throw new Error('網路回應不正確');
        }
        return response.json();
      })
      .then(data => {
        setOrders(data); // 設置訂單數據
        setFilteredOrders(data); // 設置篩選後的訂單數據（初始化時顯示所有訂單）
      })
      .catch(error => console.error('獲取數據時出錯:', error));
  }, []);

  useEffect(() => {
    // 根據選擇的月份篩選訂單
    if (selectedMonth === 'all') {
      setFilteredOrders(orders); // 如果選擇的是 "all"，顯示所有訂單
    } else {
      const filtered = orders.filter(order => {
        const orderMonth = new Date(order.rent_date).getMonth();
        return orderMonth === parseInt(selectedMonth);
      });
      setFilteredOrders(filtered);
    }
  }, [selectedMonth, orders]);

  // 計算每月的訂單數量
  const calculateMonthlyOrders = () => {
    const monthlyOrders = Array(12).fill(0); // 初始化12個月的訂單數量

    filteredOrders.forEach(order => {
      const month = new Date(order.rent_date).getMonth(); // 獲取訂單的月份
      monthlyOrders[month] += 1; // 增加對應月份的訂單數量
    });

    return monthlyOrders; // 返回每月訂單數量的數組
  };

  // 計算每個汽車品牌的訂單數量
  const calculateBrandOrders = () => {
    const brandOrders = {}; // 初始化一個對象來存儲品牌數量

    filteredOrders.forEach(order => {
      const brand = order.car_brand; // 獲取訂單中的汽車品牌
      if (brandOrders[brand]) {
        brandOrders[brand] += 1; // 如果品牌已存在，增加其訂單數量
      } else {
        brandOrders[brand] = 1; // 如果品牌不存在，初始化訂單數量為1
      }
    });

    return brandOrders; // 返回每個品牌的訂單數量對象
  };

  // 計算並保存總會員數、總員工數、總訂單數及總金額
  const totalMembers = members.length;
  const totalEmployees = employees.length;
  const totalOrders = filteredOrders.length;
  const totalAmount = filteredOrders.reduce((sum, order) => sum + order.total, 0);

  // 獲取每月訂單數量和品牌訂單數量
  const monthlyOrders = calculateMonthlyOrders();
  const brandOrders = calculateBrandOrders();
  
  // 提取品牌名稱和對應的訂單數量
  const brandLabels = Object.keys(brandOrders);
  const brandData = Object.values(brandOrders);

  // 配置每月訂單數量的柱狀圖數據
  const chartData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    datasets: [
      {
        label: '每月訂單數量',
        data: monthlyOrders,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // 配置按品牌劃分的圓餅圖數據
  const pieChartData = {
    labels: brandLabels,
    datasets: [
      {
        label: '汽車品牌訂單數量',
        data: brandData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={DashboardStyles.content}>
      <h2 className={DashboardStyles.h2}>RentCar Dashboard</h2>
      
      {/* 新增月份篩選 */}
      <div className={DashboardStyles.filterContainer}>
        <label htmlFor="monthSelect">篩選月份：</label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          <option value="all">所有月份</option>
          <option value="0">1月</option>
          <option value="1">2月</option>
          <option value="2">3月</option>
          <option value="3">4月</option>
          <option value="4">5月</option>
          <option value="5">6月</option>
          <option value="6">7月</option>
          <option value="7">8月</option>
          <option value="8">9月</option>
          <option value="9">10月</option>
          <option value="10">11月</option>
          <option value="11">12月</option>
        </select>
      </div>

      <div className={DashboardStyles.dashboardContainer}>
        <div className={DashboardStyles.dashboardCard}>
          <h3>會員總數</h3>
          <p>{totalMembers}</p>
        </div>
     
        <div className={DashboardStyles.dashboardCard}>
          <h3>員工總數</h3>
          <p>{totalEmployees}人</p>
        </div>
      
        <div className={DashboardStyles.dashboardCard}>
          <h3>訂單總數</h3>
          <p>{totalOrders}</p>
        </div>
        <div className={DashboardStyles.dashboardCard}>
          <h3>總金額</h3>
          <p>{totalAmount} 元</p>
        </div>
      </div>
      
      <div className={DashboardStyles.chartRow}>
        <div className={DashboardStyles.ordersDashboard}>
          <h2>每月訂單數量</h2>
          <Bar data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
  
        <div className={DashboardStyles.brandDashboard}>
          <h2>按汽車品牌訂單分佈</h2>
          <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
