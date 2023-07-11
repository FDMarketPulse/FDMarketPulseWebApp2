import React, {useEffect, useRef, useState} from "react";
import styles from "./styles.module.less";
import {Button, Card, Col, ConfigProvider, FloatButton, Input, Row, Spin, theme,} from "antd";
import {
  CloseOutlined,
  CustomerServiceOutlined,
  MessageOutlined,
  RobotOutlined,
  SendOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {useRootSelector} from "@/infra/hooks";
import {ChatAction, ChatSel} from "@/infra/features/chatbot";
import {useDispatch} from "react-redux";

const FloatingChatWindow: React.FC = () => {
  const dispatch = useDispatch();
  const chatGptData = useRootSelector(ChatSel.chatGptReturn);
  const isChatLoading = useRootSelector(ChatSel.isChatGptReturnLoading)
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [tempSecretKey, setTempSecretKey] = useState("");
  const chatContainerRef = useRef(null);


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
  const handleSecretKeyChange = (e) => {
    setTempSecretKey(e.target.value);
  };
  const handleSecretKeyEnter = (e) => {
    if (e.key === "Enter") {
      setSecretKey(e.target.value);
    }
  };
  const handleSendMessage = async () => {
    // Create a new message object for the user's message
    const userMessageObject = {
      role: "user",
      content: userMessage,
    };

    // Update the chat history locally by appending the user's message
    const updatedChatHistory = [...chatGptData.chatHistory, userMessageObject];

    // Create the payload using the updated message structure
    const payload = {
      message: userMessage,
      apiKey: secretKey,
      chatHistory: updatedChatHistory,
    };

    // Update the Redux store with the updated chat history
    dispatch(ChatAction.setChatGptReturn(payload));

    // Make the API call to send the message and receive the bot's response
    await dispatch(ChatAction.fetchChatGptReturn.request(payload));

    setUserMessage(""); // Clear the user message after sending
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatGptData.chatHistory]);

  const renderMessages = () => {

    return chatGptData.chatHistory.map((message, index) => (
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
        {/* Chat window */}
        {isChatOpen && (
            <div className={styles["chat-window"]}>
              {/* Chat content */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                    type="default"
                    icon={<CloseOutlined />}
                    onClick={closeChatWindow}
                    size="small"
                    shape="circle"
                    style={{marginBottom:"5px"}}
                />
              </div>
              {!secretKey && <Input
                  value={tempSecretKey}
                  onChange={handleSecretKeyChange}
                  onPressEnter={handleSecretKeyEnter}
                  placeholder="Open API Secret Key to use the bot"
                  style={{ flex: 1 }}
              /> }
              {secretKey &&    <>
                <ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
                  <Card bordered={false} style={{ height: "500px", overflowY: "auto" }}>
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
                        isChatLoading ? <Spin />:        <Button
                            type="primary"
                            icon={<SendOutlined />}
                            onClick={handleSendMessage}
                            disabled={!userMessage} // Disable the send button if no message is typed
                        />

                      }
                  />
                </div>
              </> }


            </div>
        )}
      </>
  );
};

export default FloatingChatWindow;
