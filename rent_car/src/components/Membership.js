import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import membership from '../styles/Membership.module.css';

const Membership = () => {
  const [activeSection, setActiveSection] = useState('members');
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // 保存用户输入的搜索词
  const [filteredMembers, setFilteredMembers] = useState([]); // 保存筛选后的会员
  const navigate = useNavigate();

  useEffect(() => {
    if (activeSection === 'members') {
      fetch('http://localhost:8080/daniel2/getallorders2')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setMembers(data);
          setFilteredMembers(data); // 初始加载时显示所有会员
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [activeSection]);

  const handleSearch = () => {
    const results = members.filter(member =>
      member.memberId.includes(searchTerm) || member.memberName.includes(searchTerm) // 根据会员编号或会员名称进行筛选
    );
    setFilteredMembers(results); // 更新筛选后的会员数据
  };

  const renderContent = () => {
    if (activeSection === 'members') {
      return (
        <div className={membership.membershipDashboard}>
          <h2>會員資料</h2>
          <div className={membership.search_div}>
            <button onClick={handleSearch}>搜尋</button> {/* 搜索按钮 */}
            <input 
              type="text" 
              className={membership.input} 
              placeholder='請輸入會員編號或會員名稱' 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} // 更新搜索词
            />
          </div>
          <table className={membership.membershipTable}>
            <thead>
              <tr>
                <th>會員編號</th>
                <th>會員名稱</th>
                <th>Email</th>
                <th>會員電話</th>
                <th>動作</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.memberId}>
                  <td>{member.memberId}</td>
                  <td>{member.memberName}</td>
                  <td>{member.memberEmail}</td>
                  <td>{member.memberPhone}</td>
                  <td>
                    <button className={membership.button}>View</button>
                    <button 
                      className={membership.button}
                      onClick={() => navigate('/')}  // 回到首页
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
    return null;
  };

  return (
    <div className={membership.container}>
      <aside>
        <ul>
          <li>
            <button
              className={activeSection === 'members' ? membership.active : ''}
              onClick={() => setActiveSection('members')}
            >
              會員資料
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'employeeInfo' ? membership.active : ''}
              onClick={() => { 
                setActiveSection('employeeInfo');
                navigate('/employeesInfo');
              }}
            >
              員工資訊
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'orders' ? membership.active : ''}
              onClick={() => {
                setActiveSection('orders');
                navigate('/backstage');  // 导航到 Backstage 页面
              }}
            >
              訂單資料
            </button>
          </li>
          <li>
            <button
              className={activeSection === 'home' ? membership.active : ''}
              onClick={() => {
                window.location.href = 'http://tongbro.ddns.net/HomePage';
              }}
            >
              回首頁
            </button>
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
