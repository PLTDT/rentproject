import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/EmployeeInfo.module.css'; // 確保引入的是 EmployeeInfo.module.css

const EmployeeInfo = () => {
  const [activeSection, setActiveSection] = useState('employeeInfo');
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeSection === 'employeeInfo') {
      fetch('http://localhost:8080/daniel3/getallemployee3') // 假設此 API 返回所有員工信息
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          setEmployeeInfo(data);
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [activeSection]); // 確保只在 activeSection 改變時重新執行

  const renderContent = () => {
    switch (activeSection) {
      case 'members':
        return <div className={styles.title}>會員資料</div>;
      case 'employees':
        return <div className={styles.title}>員工資料</div>;
      case 'employeeInfo':
      default:
        return (
          <div className={styles.employeeInfoDashboard}>
            <div className={styles.title}>員工資料</div>;
            <table className={styles.employeeInfoTable}>
              <thead>
                <tr>
                  <th>員工編號</th>
                  <th>員工名稱</th>
                  <th>職位</th>
                  <th>部門</th>
                </tr>
              </thead>
              <tbody>
                {employeeInfo.map((employee) => (
                  <tr key={employee.employeeId}>
                    <td>{employee.employeeId}</td>
                    <td>{employee.employeeName}</td>
                    <td>{employee.employeePosition}</td>
                    <td>{employee.employeeDep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className={styles.content}>
      {renderContent()}
    </div>
  );
};

export default EmployeeInfo;
