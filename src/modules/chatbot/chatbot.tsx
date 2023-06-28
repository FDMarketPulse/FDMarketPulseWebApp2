import React, { useState } from "react";
import { Card, Col, Row } from "antd";
import styles from "./styles.module.less";
import FloatingChatWindow from "@/modules/chatbot/floatingChatWindow";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };
  const dummyData = [
    { msg: "hi, how are you", role: "user" },
    { msg: "hi, how are you", role: "robot" },
  ];
  return (
    <div>
      <FloatingChatWindow/>
      <br />
      <Card>
        <Row justify={"start"}>
          <Col span={18}>
            <Card title={"user"}>hi how are you</Card>
          </Col>
        </Row>
        <br />
        <Row justify={"end"}>
          <Col span={18}>
            <Card title={"robot"}>I am good</Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ChatBot;
