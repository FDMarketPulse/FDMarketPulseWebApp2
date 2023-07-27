import React from "react";
import { Card, Tabs } from "antd";
import NewsAnalysisTab from "./newsAnalysisTab";
import DocAnalysisTab from "@/modules/gpt/documentAnalysisTab";
import DocAnalysisTabV2 from "@/modules/gpt/documentAnalysisV2";

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
        <TabPane tab="Documents Analysis 2" key="3">
            <Card>
                <DocAnalysisTabV2/>
            </Card>
        </TabPane>
    </Tabs>
  );
};

export default GptPage;
