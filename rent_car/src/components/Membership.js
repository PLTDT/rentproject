import React, { useState, useEffect } from 'react';
import membership from '../styles/Membership.module.css';  // 使用 CSS Modules 引入 Membership.css

const Membership = () => {
  const [activeSection, setActiveSection] = useState('members');
  const [members, setMembers] = useState([]);

  // 使用 useEffect 钩子从 Spring Boot API 获取数据
  useEffect(() => {
    fetch('/daniel/getallorders')
      .then(response => response.json())
      .then(data => setMembers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // 空数组作为依赖项，确保只在组件加载时执行一次

  const renderContent = () => {
    switch (activeSection) {
      case 'members':
        return (
          <div className={membership.membershipDashboard}>
            <h2>會員資料</h2>
            <table className={membership.membershipTable}>
              <thead>
                <tr>
                  <th>會員編號</th>
                  <th>會員名稱</th>
                  <th>Email</th>
                  <th>加入日期</th>
                  <th>動作</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.訂單編號}>
                    <td>{member.訂單編號}</td>
                    <td>{member.客戶名稱}</td>
                    <td>{member.email}</td>
                    <td>{member.訂單日期}</td>
                    <td>
                      <button className={membership.button}>View</button>
                      <button className={membership.button}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'employees':
        return <h2>員工資料</h2>; // 员工资料的内容
      case 'orders':
      default:
        return <h2>訂單資料</h2>; // 订单资料的内容
    }
  };

  return (
    <div className={membership.container}>
      <aside>
        <ul>
          <li>
            <a
              href="#"
              className={activeSection === 'members' ? membership.active : ''}
              onClick={() => setActiveSection('members')}
            >
              會員資料
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === 'employees' ? membership.active : ''}
              onClick={() => setActiveSection('employees')}
            >
              員工資料
            </a>
          </li>
          <li>
            <a
              href="#"
              className={activeSection === 'orders' ? membership.active : ''}
              onClick={() => setActiveSection('orders')}
            >
              訂單資料
            </a>
          </li>
        </ul>
      </aside>
      <div className={membership.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Membership;
