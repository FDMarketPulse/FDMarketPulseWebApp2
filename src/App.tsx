import React, { useEffect } from "react";
import { ConfigProvider, Layout, theme } from "antd";
import SiderMenu from "@/modules/sider/siderMenu";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DashAction } from "@/infra/features/dashboard";
import FloatingButton from "@/components/chatBot/communication";
import ChatBot from "@/modules/chatbot/chatbot";

const { darkAlgorithm } = theme;
const { Header, Content, Footer, Sider } = Layout;
const currentYear = new Date().getFullYear();
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DashAction.fetchSecIndReturns.request());
    dispatch(DashAction.fetchMarketNewsOverall.request());
  }, [dispatch]);
  return (
    <ConfigProvider
      theme={{
        algorithm: [darkAlgorithm],
        token: { colorPrimary: "#00b96b" },
      }}
    >
      <Layout>
        <FloatingButton />
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <SiderMenu />
        </Sider>
        <Layout>
          {/*<Header style={{ padding: 0, margin: "24px 16px 0" }}>*/}
          {/*  */}
          {/*</Header>*/}
          <Content
            style={{ margin: "24px 16px 0"}}
          >
            <ChatBot />
            <div style={{ position: "relative" ,zIndex:0}}>
              <div style={{ padding: 24, minHeight: 480 }}>
                <Outlet />
              </div>

            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            FDMarketPulse ©{currentYear}
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
