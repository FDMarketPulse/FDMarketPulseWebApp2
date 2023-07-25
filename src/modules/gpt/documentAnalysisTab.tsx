import React, { useState } from "react";
import { Card, Col, Input, Row, Space, Typography } from "antd";
import SubmitButton from "@/components/button/submitButton";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";

const { Title, Paragraph } = Typography;

const DocAnalysisTab: React.FC = () => {
  const dispatch = useDispatch();
  const GPT_API_KEY = import.meta.env.VITE_GPT_API_KEY;
  const [url, setUrl] = useState("");
  const [question, setQuestion] = useState("");
  const docAnswer = useRootSelector(ChatSel.qnaResp);
  const isDocAnswerLoading = useRootSelector(ChatSel.isQnARespLoading);

  const handleAnalysis = async () => {
    const updatedPayload = {
      url: url,
      message: question
    };
    await dispatch(ChatAction.fetchQnA.request(updatedPayload));
  };

  return (
    <Row gutter={24}>
      <Col xs={24} lg={12}>
        <Card bordered={false}>
          <Space direction={"vertical"} style={{width: "100%"}}>
            <Title level={3}>Document Analyzer</Title>
            <Paragraph type="secondary">Enter your document URL and question:</Paragraph>
            <Input
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder="Enter your document URL here"
              style={{width: "100%"}}
            />
            <Input.TextArea
              rows={10}
              value={question}
              onChange={e => setQuestion(e.target.value)}
              placeholder="Enter your question here"
              style={{width: "100%"}}
            />
            <SubmitButton text={"Generate your Answer"} onClick={handleAnalysis} disable={isDocAnswerLoading}/>
          </Space>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card>
          {isDocAnswerLoading ? <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
              <PulseLoader color={"#00b96b"} size={15} />
            </div> :
            <Space direction={"vertical"} style={{width: "100%"}}>
              <Title level={3}>AI Output</Title>
              <Paragraph type="secondary">Here's the answer to your question!</Paragraph>
              <Input.TextArea
                rows={10}
                value={docAnswer.resp}
                readOnly
                placeholder="Answer will appear here"
                style={{width: "100%"}}
              />
            </Space>}
        </Card>
      </Col>
    </Row>
  );
};

export default DocAnalysisTab;
