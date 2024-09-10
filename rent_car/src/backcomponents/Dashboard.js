import React, { useState, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
  const [members, setMembers] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [selectedMember, setSelectedMember] = useState('all');
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const memberResponse = await fetch('http://localhost:8080/daniel2/getallorders2');
        const memberData = await memberResponse.json();
        setMembers(memberData);

        const employeeResponse = await fetch('http://localhost:8080/daniel3/getallemployee3');
        const employeeData = await employeeResponse.json();
        setEmployees(employeeData);

        const orderResponse = await fetch('http://localhost:8080/daniel/getallorders');
        const orderData = await orderResponse.json();
        setOrders(orderData);
        setFilteredOrders(orderData);
      } catch (error) {
        console.error('獲取數據時出錯:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = orders;

    if (selectedMonth !== 'all') {
      filtered = filtered.filter(order => new Date(order.rent_date).getMonth() === parseInt(selectedMonth));
    }

    if (selectedMember !== 'all') {
      filtered = filtered.filter(order => order.customer_name === selectedMember);
    }

    setFilteredOrders(filtered);
  }, [selectedMonth, selectedMember, orders]);

  const calculateMonthlyOrders = () => {
    const monthlyOrders = Array(12).fill(0);

    filteredOrders.forEach(order => {
      const month = new Date(order.rent_date).getMonth();
      monthlyOrders[month] += 1;
    });

    return monthlyOrders;
  };

  const calculateBrandOrders = () => {
    return filteredOrders.reduce((acc, order) => {
      acc[order.car_brand] = (acc[order.car_brand] || 0) + 1;
      return acc;
    }, {});
  };

  const totalMembers = members.length;
  const totalEmployees = employees.length;
  const totalOrders = filteredOrders.length;
  const totalAmount = filteredOrders.reduce((sum, order) => sum + order.total, 0);

  const monthlyOrders = calculateMonthlyOrders();
  const brandOrders = calculateBrandOrders();
  
  const brandLabels = Object.keys(brandOrders);
  const brandData = Object.values(brandOrders);

  const chartData = {
    labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    datasets: [{
      label: '每月訂單數量',
      data: monthlyOrders,
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    }],
  };

  const pieChartData = {
    labels: brandLabels,
    datasets: [{
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
    }],
  };

  return (
    <div className={styles.content}>
      <div className={styles.title}>總概要</div>
      
      {/* 篩選區域 */}
      <div className={styles.filterContainer}>
        <label htmlFor="monthSelect">月份：</label>
        <select
          id="monthSelect"
          value={selectedMonth}
          onChange={e => setSelectedMonth(e.target.value)}
        >
          <option value="all">所有月份</option>
          {[...Array(12).keys()].map(month => (
            <option key={month} value={month}>{month + 1}月</option>
          ))}
        </select>
        
        {/* 新增會員名稱篩選 */}
        <label htmlFor="memberSelect">會員名稱：</label>
        <select
          id="memberSelect"
          value={selectedMember}
          onChange={e => setSelectedMember(e.target.value)}
        >
          <option value="all">所有會員</option>
          {members.map(member => (
            <option key={member.employeeId} value={member.employeeName}>
              {member.employeeName}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardCard}>
          <h3>會員總數</h3>
          <p>{totalMembers}</p>
        </div>

        <div className={styles.dashboardCard}>
          <h3>員工總數</h3>
          <p>{totalEmployees}人</p>
        </div>
      
        <div className={styles.dashboardCard}>
          <h3>訂單總數</h3>
          <p>{totalOrders}</p>
        </div>
        <div className={styles.dashboardCard}>
          <h3>總金額</h3>
          <p>{totalAmount} 元</p>
        </div>
      </div>
      
      <div className={styles.chartRow}>
        <div className={styles.ordersDashboard}>
          <h2>每月訂單數量</h2>
          <Bar data={chartData} options={{ maintainAspectRatio: false }} />
        </div>
  
        <div className={styles.brandDashboard}>
          <h2>汽車品牌訂單</h2>
          <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
