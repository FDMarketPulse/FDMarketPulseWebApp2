import React from "react";
import { Card, Tabs } from "antd";
import NewsAnalysisTab from "./newsAnalysisTab";
import DocAnalysisTab from "@/modules/gpt/documentAnalysis";
import DocumentChatBot from "@/modules/gpt/documentChatBot";

const { TabPane } = Tabs;

const GptPage: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="News Analysis" key="1">
        <NewsAnalysisTab />
      </TabPane>
      <TabPane tab="Documents Analysis" key="3">
        <Card>
          <DocAnalysisTab />
        </Card>
      </TabPane>
        <TabPane tab="Documents ChatBot" key="4">
            <Card>
                <DocumentChatBot />
            </Card>
        </TabPane>
    </Tabs>
  );
};

export default GptPage;
