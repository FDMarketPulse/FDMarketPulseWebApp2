import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useRootSelector } from "@/infra/hooks";
import { UserAction, UserSel } from "@/infra/features/user";
// import { signInRequest } from './reducer';
const { Title } = Typography;
const SignIn: React.FC = () => {
  const dispatch = useDispatch();
  const userAuth = useRootSelector(UserSel.userAuthState);
  const [form] = Form.useForm();
  const handleSubmit = async (values) => {
    const { email, password } = values;
    await dispatch(
      UserAction.firebaseEmailPasswordLogin.request({ email, password })
    );
    // dispatch(signInRequest({ email, password }));
  };
  console.log(userAuth);
  return (
    <div>
      <Title level={2}>Sign In</Title>
      <Form form={form} onFinish={handleSubmit}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
