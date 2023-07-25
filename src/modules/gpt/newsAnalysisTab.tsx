import React, { useState } from "react";
import { Card, Col, Input, Row, Space, Typography } from "antd";
import SubmitButton from "@/components/button/submitButton";
import SentimentsCard from "@/components/card/sentimentsCard";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";

const { Title, Paragraph } = Typography;

const NewsAnalysisTab: React.FC = () => {
  const dispatch = useDispatch();
  const GPT_API_KEY = import.meta.env.VITE_GPT_API_KEY;
  const [input, setInput] = useState("");
  const newsSentiment = useRootSelector(ChatSel.tranNewsSentimentGpt)
  const isNewsSentimentLoading = useRootSelector(ChatSel.isTranslationNewsSentimentLoading)

  const handleTranslate = async () => {
    if (input.trim() === "") {
      dispatch(ChatAction.resetTransNewsSentiment(""));
      return;
    }
    const updatedPayload = {
      message: input,
      apiKey: GPT_API_KEY,
    };
    await dispatch(ChatAction.fetchTranNewsSentiment.request(updatedPayload));
  };

  return (
    <Row gutter={24}>
      <Col xs={24} lg={12}>
        <Card bordered={false}>
          <Space direction={"vertical"} style={{width: "100%"}}>
            <Title level={3}>News Analyzer</Title>
            <Paragraph type="secondary">What your news about?</Paragraph>
            <Input.TextArea
              rows={10}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Paste your article here"
              style={{width: "100%"}}
            />
            <SubmitButton text={"Generate your Sentiment"} onClick={handleTranslate}
                          disable={isNewsSentimentLoading}/>
          </Space>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card>
          {isNewsSentimentLoading?   <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
              <PulseLoader color={"#00b96b"} size={15} />
            </div>:
            <Space direction={"vertical"} style={{width: "100%"}}>
              <Title level={3}>AI Output</Title>
              <Paragraph type="secondary">Enjoy the outstanding analysis!</Paragraph>
              <Input.TextArea
                rows={10}
                value={newsSentiment.translation}
                readOnly
                placeholder="Translated news will appear here"
                style={{width: "100%"}}
              />
              <SentimentsCard data={newsSentiment} />
            </Space>}
        </Card>
      </Col>
    </Row>
  );
};

export default NewsAnalysisTab;
