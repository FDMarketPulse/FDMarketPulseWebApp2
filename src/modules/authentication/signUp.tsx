import React, { useState } from 'react';
import {Form, Input, Button, Typography} from 'antd';
import { auth } from "@/infra/auth/firebase";
import { useRootSelector } from "@/infra/hooks";
import { UserAction, UserSel } from "@/infra/features/user";
import { useDispatch } from "react-redux";
const { Title } = Typography;
const SignUp = () => {
  const dispatch = useDispatch();
  const userAuth = useRootSelector(UserSel.userAuthState)
  console.log(userAuth)
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const { email, password, displayName, specialCode } = values;

    // Constant special code
    const SPECIAL_CODE = 'FD-Market-Pulse-2023';

    if (specialCode !== SPECIAL_CODE) {
      alert('Sign up code is not correct!');
      return;
    }
    await dispatch(UserAction.firebaseEmailPasswordSignUp.request({email,password,displayName}))
  };

  return (
      <div>
          <Title level={2}>Sign Up</Title>

          <Form form={form} onFinish={handleSubmit}>
              <Form.Item name="displayName" rules={[{ required: true, message: 'Please input your display name!' }]}>
                  <Input placeholder="Display Name" />
              </Form.Item>
              <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
                  <Input placeholder="Email" />
              </Form.Item>
              <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item name="specialCode" rules={[{ required: true, message: 'Please input the special code!' }]}>
                  <Input placeholder="Special Code" />
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit">Sign Up</Button>
              </Form.Item>
          </Form>
      </div>

  );
};

export default SignUp;
