import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Input,
  Row,
  Space,
  Spin,
  Switch,
  Typography,
} from "antd";
import { RobotOutlined, SendOutlined, UserOutlined } from "@ant-design/icons";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { useDispatch } from "react-redux";

// Replace the import.meta.env.VITE_GPT_API_KEY with your key
const ChatBot: React.FC = () => {
  const dispatch = useDispatch();
  const chatGptData = useRootSelector(ChatSel.docGptReturn);
  const isChatLoading = useRootSelector(ChatSel.isDocGptReturnLoading);
  const [userMessage, setUserMessage] = useState("");
  const [deleteIndex2, setDeleteIndex] = useState(false);
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const uniqueChatHistory = chatGptData.chatHistory.filter(
    (value, index, self) => {
      return (
        self.findIndex(
          (v) => v.role === value.role && v.content === value.content
        ) === index
      );
    }
  );
  const handleSendMessage = async () => {
    const userMessageObject = {
      role: "user",
      content: userMessage,
    };

    const updatedChatHistory = [...chatGptData.chatHistory, userMessageObject];

    const payload = {
      message: userMessage,
      chatHistory: updatedChatHistory,
      deleteIndex: deleteIndex2,
      docHistory: chatGptData.docHistory,
    };
    console.log(payload);
    // Removed duplicate action dispatch
    await dispatch(ChatAction.fetchDocGptReturn.request(payload));

    setUserMessage("");
  };

  return (
    <Card
      title="Chatbot"
      bordered={false}
      style={{ width: "100%", maxHeight: "80vh", overflowY: "auto" }}
    >
      <Row gutter={[16, 16]}>
        {uniqueChatHistory.map((message, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={24}>
            <Card
              title={
                <Space>
                  {message.role === "user" ? (
                    <UserOutlined />
                  ) : (
                    <RobotOutlined />
                  )}
                  <Typography.Text
                    type={message.role === "user" ? "secondary" : "success"}
                  >
                    {message.role}
                  </Typography.Text>
                </Space>
              }
            >
              {message.content}
            </Card>
          </Col>
        ))}
      </Row>
      <Row justify="end" style={{ marginTop: "1rem" }}>
        <Col xs={24} sm={24} md={24} lg={24}>
          {" "}
          {/* Changed the lg attribute to 24 */}
          <Input
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message..."
            onPressEnter={!isChatLoading && handleKeyPress}
            style={{ width: "100%" }}
            suffix={
              isChatLoading ? (
                <Spin />
              ) : (
                <Space>
                  <Switch
                    checked={deleteIndex2}
                    onChange={(checked) => setDeleteIndex(checked)}
                  />
                  <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={handleSendMessage}
                    disabled={!userMessage}
                  />
                </Space>
              )
            }
          />
        </Col>
      </Row>
    </Card>
  );
};

export default ChatBot;
