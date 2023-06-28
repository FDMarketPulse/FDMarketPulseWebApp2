import React, { useState } from "react";
import styles from "./styles.module.less";
import { Card, Col, ConfigProvider, FloatButton, Row, theme } from "antd";
import { CustomerServiceOutlined, MessageOutlined } from "@ant-design/icons";

const FloatingChatWindow: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatVisible, setChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const handleSendMessage = () => {
    // Implement your logic for sending a message
  };

  const openChatWindow = () => {
    setIsChatOpen(true);
  };

  const closeChatWindow = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Floating button */}
      {/*<button className={styles["floating-button"]} onClick={openChatWindow}>*/}
      {/*  Chat*/}
      {/*</button>*/}
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 24, display: "block" }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton icon={<MessageOutlined />} onClick={openChatWindow} />
      </FloatButton.Group>
      {/* Chat window */}
      {isChatOpen && (
        <div className={styles["chat-window"]}>
          {/* Chat content */}
          <ConfigProvider
            theme={{
              algorithm: theme.defaultAlgorithm,
            }}
          >
            <Card
              bordered={false}
              style={{ height: "500px", overflowY: "auto" }}
            >
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
          </ConfigProvider>

          {/* Close button */}
          <button className={styles["close-button"]} onClick={closeChatWindow}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingChatWindow;
