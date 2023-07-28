import React from "react";
import { Card, Tabs } from "antd";
import NewsAnalysisTab from "./newsAnalysisTab";
import DocAnalysisTab from "@/modules/gpt/documentAnalysis";

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
    </Tabs>
  );
};

export default GptPage;
