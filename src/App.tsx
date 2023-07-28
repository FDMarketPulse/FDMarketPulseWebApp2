import React, { useEffect } from "react";
import { ConfigProvider, Layout, theme } from "antd";
import SideMenu from "@/modules/menus/sideMenu";
import { Outlet } from "react-router-dom"; // Import Outlet
import { useDispatch } from "react-redux";
import { DashAction } from "@/infra/features/dashboard";
import FloatingChatWindow from "@/modules/chatbot/floatingChatWindow";

const { darkAlgorithm } = theme;
const { Content, Footer, Sider } = Layout;
const currentYear = new Date().getFullYear();

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DashAction.fetchSecIndReturns.request());
    dispatch(DashAction.fetchMarketNewsOverall.request());
    dispatch(DashAction.fetchMarketMacroOhlc.request());
  }, [dispatch]);

  return (
    <div>
      <ConfigProvider
        theme={{
          algorithm: [darkAlgorithm],
          token: { colorPrimary: "#00b96b" },
        }}
      >
        <Layout style={{ minHeight: "100vh" }}>
          <FloatingChatWindow />
          <Sider breakpoint="lg" collapsedWidth="0">
            <SideMenu />
          </Sider>

          <Layout>
            <Content
              style={{
                margin: "24px 16px 0",
                minHeight: "100vh",
                overflow: "auto",
              }}
            >
              <div style={{ padding: 24 }}>
                <Outlet />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              FDMarketPulse ©{currentYear}
            </Footer>
          </Layout>
        </Layout>
      </ConfigProvider>
    </div>
  );
};

export default App;
