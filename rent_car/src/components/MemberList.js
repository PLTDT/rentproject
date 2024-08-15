import React, { useState, useEffect } from 'react';
import { Table, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('/api/members')
      .then(response => {
        setMembers(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch members:', error);
      });
  }, []);

  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => <Link to={`/member/${record.id}`}>{text}</Link>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];

  return (
    <>
      <Input.Search
        placeholder="搜尋會員"
        onChange={e => setSearchTerm(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <Table columns={columns} dataSource={filteredMembers} rowKey="id" />
    </>
  );
};

export default MemberList;
