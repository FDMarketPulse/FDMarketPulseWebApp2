import React from "react";
import { Card, Tabs } from "antd";
import NewsAnalysisTab from "./NewsAnalysisTab";

const { TabPane } = Tabs;

const GptPage: React.FC = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="News Analysis" key="1">
        <NewsAnalysisTab />
      </TabPane>
      <TabPane tab="Earnings Analysis" key="2">
        <Card>
          Coming soon! Stay Tune!
        </Card>
      </TabPane>
    </Tabs>
  );
};

export default GptPage;
