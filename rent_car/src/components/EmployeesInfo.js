import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeInfoStyles from '../styles/EmployeeInfo.module.css'; // 确保引入的是 EmployeeInfo.module.css

const EmployeeInfo = () => {
  const [activeSection, setActiveSection] = useState('employeeInfo');
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeSection === 'employeeInfo') {
      fetch('http://localhost:8080/daniel/getallemployees') // 假设此 API 返回所有员工信息
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
  }, [activeSection]); // 确保只在 activeSection 改变时重新执行

  const renderContent = () => {
    switch (activeSection) {
      case 'members':
        return <h2>會員資料</h2>;
      case 'employees':
        return <h2>員工資料</h2>;
      case 'employeeInfo':
      default:
        return (
          <div className={EmployeeInfoStyles.employeeInfoDashboard}>
            <h2>員工資料</h2>
            <table className={EmployeeInfoStyles.employeeInfoTable}>
              <thead>
                <tr>
                  <th>員工編號</th>
                  <th>員工名稱</th>
                  <th>職位</th>
                  <th>部門</th>
                  <th>動作</th>
                </tr>
              </thead>
              <tbody>
                {employeeInfo.map((employee) => (
                  <tr key={employee.employeeNumber}>
                    <td>{employee.employeeNumber}</td>
                    <td>{employee.employeeName}</td>
                    <td>{employee.employeePosition}</td>
                    <td>{employee.employeeDept}</td>
                    <td>
                      <button
                        className={EmployeeInfoStyles.button}
                        onClick={() => navigate(`/employee/${employee.employeeNumber}`)}
                      >
                        View
                      </button>
                      <button
                        className={EmployeeInfoStyles.button}
                        onClick={() => navigate(`/employee/edit/${employee.employeeNumber}`)}
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
    <div className={EmployeeInfoStyles.container}>
      <aside>
        <ul>
          <li>
            <button
              className={activeSection === 'members' ? EmployeeInfoStyles.active : ''}
              onClick={() => {
                setActiveSection('members');
                navigate('/Membership'); // 然后导航到 Membership 页面
              }}
            >
              會員資料
            </button>
          </li>
          <li>
          <button
              className={activeSection === 'employeeInfo' ? EmployeeInfoStyles.active : ''}
              onClick={() =>{ 
                setActiveSection('employeeInfo')
                navigate('/employeesInfo')}}
            >
              員工資訊
            </button>
          </li>
          <li>
          <button
              className={activeSection === 'orders' ? EmployeeInfoStyles.active : ''}
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
              className={activeSection === 'home' ? EmployeeInfoStyles.active : ''}
              onClick={() => {
                window.location.href = 'http://tongbro.ddns.net/HomePage';
              }}
            >
              回首頁
            </button>
          </li>
        </ul>
      </aside>
      <div className={EmployeeInfoStyles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default EmployeeInfo;
