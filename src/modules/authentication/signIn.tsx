import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useRootSelector } from "@/infra/hooks";
import { UserAction, UserSel } from "@/infra/features/user";
// import { signInRequest } from './reducer';

const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userAuth = useRootSelector(UserSel.userAuthState)
  const handleSubmit = () => {
    dispatch(UserAction.firebaseEmailPasswordLogin.request({email,password}))
    // dispatch(signInRequest({ email, password }));
  };
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item label="Email" name="email">
        <Input onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password onChange={(e) => setPassword(e.target.value)} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;
