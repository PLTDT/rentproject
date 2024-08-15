import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import axios from 'axios';

const MemberDetail = () => {
  const { id } = useParams();
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`/api/members/${id}`)
      .then(response => {
        setMember(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch member:', error);
      });
  }, [id]);

  const handleUpdate = (values) => {
    axios.put(`/api/members/${id}`, values)
      .then(() => {
        message.success('會員資料更新成功');
      })
      .catch(error => {
        console.error('Failed to update member:', error);
        message.error('更新失敗');
      });
  };

  if (!member) {
    return <div>Loading...</div>;
  }

  return (
    <Form
      initialValues={member}
      onFinish={handleUpdate}
      layout="vertical"
    >
      <Form.Item
        name="name"
        label="姓名"
        rules={[{ required: true, message: '請輸入姓名' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, message: '請輸入Email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          更新資料
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MemberDetail;
