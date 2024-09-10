import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/Membership.module.css';

const Membership = () => {
  const [activeSection, setActiveSection] = useState('members');
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMembers, setFilteredMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeSection === 'members') {
      fetch('https://tongbro.ddns.net:8080/daniel2/getallorders2')
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
      const idMatches = member.employeeId?.toString() === searchTerm;
      const nameMatches = member.employeeName?.toLowerCase() === searchTerm.toLowerCase();
      return idMatches || nameMatches;
    });
    
    if (results.length > 0) {
      setFilteredMembers(results);
    } else {
      console.log('No matching results found.');
      setFilteredMembers([]); // 清空過濾結果
    }
  };

  const renderContent = () => {
    if (activeSection === 'members') {
      return (
        <div className={styles.membershipDashboard}>
          <div className={styles.title}>會員資料</div>
          <div className={styles.search_div}>
            <button onClick={handleSearch} className={styles.button}>搜尋訂單</button>
            <input 
              type="text" 
              className={styles.input} 
              placeholder='請輸入會員編號或會員名稱' 
              value={searchTerm} 
              onChange={e => setSearchTerm(e.target.value)} 
            />
          </div>
          <table className={styles.membershipTable}>
            <thead>
              <tr>
                <th>會員編號</th>
                <th>會員名稱</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredMembers.map((member) => (
                <tr key={member.employeeId}>
                  <td>{member.employeeId}</td>
                  <td>{member.employeeName}</td>
                  <td>{member.email}</td>
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
    <div className={styles.content}>
      {renderContent()}
    </div>
  );
};

export default Membership;
