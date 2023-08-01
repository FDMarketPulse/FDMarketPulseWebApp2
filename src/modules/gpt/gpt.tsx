import React from "react";
import { Card, Tabs } from "antd";
import NewsAnalysisTab from "./newsAnalysisTab";
import DocAnalysisTab from "@/modules/gpt/documentAnalysis";
import DocumentChatBot from "@/modules/gpt/documentChatBot";
import { useRootSelector } from "@/infra/hooks";
import { UserSel } from "@/infra/features/user";

const { TabPane } = Tabs;

const GptPage: React.FC = () => {
  const userAuth = useRootSelector(UserSel.userAuthState);
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
      {userAuth.user && (
        <TabPane tab="Documents ChatBot" key="4">
          <Card>
            <DocumentChatBot />
          </Card>
        </TabPane>
      )}
    </Tabs>
  );
};

export default GptPage;
