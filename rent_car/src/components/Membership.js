import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import membership from '../styles/Membership.module.css';

const Membership = () => {
  const [activeSection, setActiveSection] = useState('members');
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [filteredMembers, setFilteredMembers] = useState([]); 
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
          console.log(data); 
          setMembers(data);
          setFilteredMembers(data); 
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [activeSection]);

  const handleSearch = () => {
    const results = members.filter(member => {
      const idMatches = member.employeeId?.toString() === searchTerm; // 精準匹配 employeeId
      const nameMatches = member.employeeName?.toLowerCase() === searchTerm.toLowerCase(); // 精準匹配 employeeName
      return idMatches || nameMatches;
    });
    
    if (results.length > 0) {
      setFilteredMembers(results);
    } else {
      console.log('No matching results found.');
      window.location.reload(); // 刷新页面
    }
  };
  
  
  


  const renderContent = () => {
    if (activeSection === 'members') {
      return (
        <div className={membership.membershipDashboard}>
          <h2>會員資料</h2>
          <div className={membership.search_div}>
          <button onClick={handleSearch} className={membership.button}>搜尋訂單</button> {/* 搜尋按鈕 */}
            <input 
              type="text" 
              className={membership.input} 
              placeholder='請輸入會員編號或會員名稱' 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
            />
          </div>
          <table className={membership.membershipTable}>
            <thead>
              <tr>
                <th>會員編號</th>
                <th>會員名稱</th>
                <th>Email</th>
                <th>會員電話</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.employeeId}>
                  <td>{member.employeeId}</td>
                  <td>{member.employeeName}</td>
                  <td>{member.email}</td>
                  <td>{member.password}</td>
   
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
    <div className={membership.content}>
      {renderContent()}
    </div>
  );
};

export default Membership;
