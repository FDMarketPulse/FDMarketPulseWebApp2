import React, { useState } from "react";
import { Button, FloatButton, Input, Tooltip } from "antd";
import { CustomerServiceOutlined, MessageOutlined } from "@ant-design/icons";
import ChatBot from "@/modules/chatbot/chatbot";

const FloatingButton: React.FC = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const handleSendMessage = () => {
    // Implement your logic for sending a message
  };

  return (
    <>
      {/*<FloatButton.Group*/}
      {/*  trigger="hover"*/}
      {/*  type="primary"*/}
      {/*  style={{ right: 24 }}*/}
      {/*  icon={<CustomerServiceOutlined />}*/}
      {/*>*/}
      {/*  <FloatButton icon={<MessageOutlined />} onClick={toggleChat} />*/}
      {/*</FloatButton.Group>*/}
    </>
  );
};

export default FloatingButton;
