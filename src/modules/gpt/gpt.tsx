import React from "react";
import { Card, Tabs } from "antd";
import NewsAnalysisTab from "./newsAnalysisTab";
import DocAnalysisTab from "@/modules/gpt/documentAnalysisTab";

const { TabPane } = Tabs;

const GptPage: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="News Analysis" key="1">
        <NewsAnalysisTab />
      </TabPane>
      <TabPane tab="Documents Analysis" key="2">
        <Card>
          <DocAnalysisTab/>
        </Card>
      </TabPane>
    </Tabs>
  );
};

export default GptPage;
