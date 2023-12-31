import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.less";
import {
  Button,
  Card,
  Col,
  ConfigProvider,
  FloatButton,
  Input,
  Row,
  Segmented,
  Spin,
  theme,
} from "antd";
import {
  CloseOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  RobotOutlined,
  RocketOutlined,
  SendOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { useDispatch } from "react-redux";
import { UserSel } from "@/infra/features/user";

const GPT_API_KEY = import.meta.env.VITE_GPT_API_KEY; // Set your GPT API key as constant here

const FloatingChatWindow: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedModelIndex, setSelectedModelIndex] = useState("GPT-3.5"); // 0 for GPT-3.5, 1 for GPT-4
  const userAuth = useRootSelector(UserSel.userAuthState);
  const chatGptData = useRootSelector(ChatSel.chatGptReturn);
  const isChatLoading = useRootSelector(ChatSel.isChatGptReturnLoading);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const chatContainerRef = useRef<HTMLDivElement | null>(null); // Replace with logic to detect if the user is logged in
  const openChatWindow = () => {
    setIsChatOpen(true);
  };

  const closeChatWindow = () => {
    setIsChatOpen(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const handleSendMessage = async () => {
    const userMessageObject = {
      role: "user",
      content: userMessage,
    };

    const updatedChatHistory = [...chatGptData.chatHistory, userMessageObject];

    const payload = {
      message: userMessage,
      apiKey: GPT_API_KEY,
      chatHistory: updatedChatHistory,
    };
    if (selectedModelIndex === "GPT-4") {
      dispatch(ChatAction.setChatGptReturn(payload));
      await dispatch(ChatAction.fetchChatGpt4Return.request(payload));
    } else {
      dispatch(ChatAction.setChatGptReturn(payload));
      await dispatch(ChatAction.fetchChatGptReturn.request(payload));
    }

    setUserMessage("");
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatGptData.chatHistory]);

  const renderMessages = () => {
    const uniqueChatHistory = chatGptData.chatHistory.filter(
      (value, index, self) => {
        return (
          self.findIndex(
            (v) => v.role === value.role && v.content === value.content
          ) === index
        );
      }
    );
    return uniqueChatHistory.map((message, index) => (
      <Row key={index} justify={message.role === "user" ? "start" : "end"}>
        <Col span={18}>
          <Card
            style={
              message.role === "user"
                ? { backgroundColor: "#F0F0F0", margin: "10px" }
                : { backgroundColor: "#C0C0C0", margin: "10px" }
            }
          >
            {message.role === "user" ? (
              <UserOutlined style={{ fontSize: "20px", marginRight: "8px" }} />
            ) : (
              <RobotOutlined style={{ fontSize: "20px", marginRight: "8px" }} />
            )}
            <span>{message.content}</span>
          </Card>
        </Col>
      </Row>
    ));
  };

  return (
    <>
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 24, display: "block" }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton icon={<MessageOutlined />} onClick={openChatWindow} />
      </FloatButton.Group>

      {isChatOpen && (
        <div className={styles["chat-window"]}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              type="default"
              icon={<CloseOutlined />}
              onClick={closeChatWindow}
              size="small"
              shape="circle"
              style={{ marginBottom: "5px" }}
            />
          </div>
          <ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
            <Card
              bordered={false}
              style={{ height: "500px", overflowY: "auto" }}
            >
              <ConfigProvider
                theme={{
                  algorithm: theme.defaultAlgorithm,
                  components: {
                    Segmented: {
                      itemActiveBg: "#00b96b",
                      algorithm: true,
                    },
                  },
                }}
              >
                {userAuth.user && (
                  <Segmented
                    block
                    // options={["GPT-3.5", "GPT-4"]}
                    options={[
                      {
                        label: "GPT-3.5",
                        value: "GPT-3.5",
                        icon: <ThunderboltOutlined />,
                      },
                      {
                        label: "GPT-4",
                        value: "GPT-4",
                        icon: <RocketOutlined />,
                      },
                    ]}
                    value={selectedModelIndex}
                    onChange={(e) => setSelectedModelIndex(e)}
                  />
                )}
              </ConfigProvider>
              <div ref={chatContainerRef} className={styles["chat-container"]}>
                {renderMessages()}
              </div>
            </Card>
          </ConfigProvider>
          <div className={styles["input-container"]}>
            <Input
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1 }}
              onPressEnter={!isChatLoading && handleKeyPress}
              suffix={
                isChatLoading ? (
                  <Spin />
                ) : (
                  <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={handleSendMessage}
                    disabled={!userMessage}
                  />
                )
              }
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatWindow;
