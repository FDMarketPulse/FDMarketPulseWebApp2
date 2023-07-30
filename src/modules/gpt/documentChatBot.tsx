import React, { useEffect, useState } from "react";
import { Card, Col, Input, Row, Space, Typography, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import SubmitButton from "@/components/button/submitButton";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { useDispatch } from "react-redux";
import { PulseLoader } from "react-spinners";
import type { RcFile } from "antd/es/upload/interface";
import {isFileLoading} from "@/infra/features/chatbot/selectors";
import ChatBot from "@/modules/chatbot/ChatWindow";

const { Title, Paragraph } = Typography;

const DocumentChatBot: React.FC = () => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState<RcFile[]>([]); // keep track of multiple files
  const [question, setQuestion] = useState("");
  const docAnswer = useRootSelector(ChatSel.qnaResp);
  const isDocAnswerLoading = useRootSelector(ChatSel.isQnARespLoading);
  const isFileUpLoading = useRootSelector(ChatSel.isFileLoading)
  const docUrl = useRootSelector(ChatSel.fileUrl);
  const fileList = useRootSelector(ChatSel.fileList);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  // const [fileList, setFileList] = useState([]);

  useEffect(() => {
    if (docUrl && question && isButtonClicked) {
      // const updatedPayload = {
      //   url: docUrl,
      //   message: question,
      // };
      //
      // dispatch(ChatAction.fetchQnA.request(updatedPayload));
      setIsButtonClicked(false);
    }
  }, [docUrl, question, isButtonClicked, dispatch]);

  const handleAnalysis = async () => {
    if (files.length > 0) {
      setIsButtonClicked(true);
      const folderName = "doc_chatbot";
      for (const file of files) {
        await dispatch(ChatAction.uploadDocFirebase.request({ file, folderName }));
      }
    }
  };

  return (

      <Row gutter={24}>
        <Col xs={24} lg={12}>
          <Card bordered={false}>
            <Space direction={"vertical"} style={{ width: "100%" }}>
              <Title level={3}>Documents ChatBot</Title>
              <Paragraph type="secondary">
                Upload your documents to customize your own Chat Bot
              </Paragraph>
              <Upload.Dragger
                  beforeUpload={(file) => {
                    setFiles((prevFiles) => [...prevFiles, file]); // update to handle multiple files
                    return false; // prevent auto upload
                  }}
                  multiple={true} // allow multiple files to be selected
                  disabled={isDocAnswerLoading || isFileUpLoading}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
              </Upload.Dragger>
              <SubmitButton
                  text={"Customize your ChatBot"}
                  onClick={handleAnalysis}
                  disable={isDocAnswerLoading || isFileUpLoading}
              />
            </Space>
            <Space direction="vertical">
              {fileList.map((file, index) => (
                  <Row key={index} align="middle">
                    <Col flex="auto"><a href={file.url} target="_blank">{file.name}</a></Col>
                    {/*<Col><Button type="danger" onClick={() => handleFileDelete(file)}>Delete</Button></Col>*/}
                  </Row>
              ))}
            </Space>
          </Card>
        </Col>
        <Col xs={24} lg={12}>

            <ChatBot/>
        </Col>
      </Row>
  );
};

export default DocumentChatBot;




