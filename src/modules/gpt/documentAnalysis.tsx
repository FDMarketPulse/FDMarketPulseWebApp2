import React, { useEffect, useState } from "react";
import { Card, Col, Input, Row, Space, Typography, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import SubmitButton from "@/components/button/submitButton";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";
import type { RcFile } from "antd/es/upload/interface";
import {UserSel} from "@/infra/features/user";

const { Title, Paragraph } = Typography;

const DocAnalysisTab: React.FC = () => {

  const dispatch = useDispatch();
  const [file, setFile] = useState<RcFile | null>(null);
  const [question, setQuestion] = useState("");
  const docAnswer = useRootSelector(ChatSel.qnaResp);
  const isDocAnswerLoading = useRootSelector(ChatSel.isQnARespLoading);
  const isFileUpLoading = useRootSelector(ChatSel.isFileLoading);
  const docUrl = useRootSelector(ChatSel.fileUrl);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  console.log(isFileUpLoading);
  console.log(isDocAnswerLoading);
  console.log("button disabled: " + isDocAnswerLoading || isFileUpLoading);
  useEffect(() => {
    if (docUrl && question && isButtonClicked) {
      const updatedPayload = {
        url: docUrl,
        message: question,
      };

      dispatch(ChatAction.fetchQnA.request(updatedPayload));
      setIsButtonClicked(false);
    }
  }, [docUrl, question, isButtonClicked, dispatch]);

  const handleAnalysis = async () => {
    if (file) {
      setIsButtonClicked(true);
      const folderName = "doc_analysis";
      await dispatch(
        ChatAction.uploadDocFirebase.request({ file, folderName })
      );
    }
  };

  return (
    <Row gutter={24}>
      <Col xs={24} lg={12}>
        <Card bordered={false}>
          <Space direction={"vertical"} style={{ width: "100%" }}>
            <Title level={3}>Document Analyzer</Title>
            <Paragraph type="secondary">
              Upload your document and ask a question:
            </Paragraph>
            <Upload.Dragger
              beforeUpload={(file) => {
                setFile(file);
                return false; // prevent auto upload
              }}
              maxCount={1}
              disabled={isDocAnswerLoading || isFileUpLoading}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Upload.Dragger>
            <Input.TextArea
              rows={10}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question here"
              style={{ width: "100%" }}
            />
            <SubmitButton
              text={"Generate your Answer"}
              onClick={handleAnalysis}
              disable={isDocAnswerLoading || isFileUpLoading}
            />
          </Space>
        </Card>
      </Col>
      <Col xs={24} lg={12}>
        <Card>
          {isDocAnswerLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <PulseLoader color={"#00b96b"} size={15} />
            </div>
          ) : (
            <Space
              direction={"vertical"}
              style={{ width: "100%", height: "100%" }}
            >
              <Title level={3}>AI Output</Title>
              <Paragraph type="secondary">
                Here's the answer to your question!
              </Paragraph>
              <Input.TextArea
                rows={10}
                value={docAnswer.resp}
                readOnly
                placeholder="Answer will appear here"
                style={{ width: "100%", height: "calc(100% - 100px)" }} // adjust as necessary
              />
            </Space>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default DocAnalysisTab;
