import React from "react";
import { ConfigProvider, Layout, theme } from "antd";
import SiderMenu from "@/modules/sider/siderMenu";
import { Outlet } from "react-router-dom";

const { darkAlgorithm, compactAlgorithm } = theme;
const { Header, Content, Footer, Sider } = Layout;
const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        algorithm: [darkAlgorithm],
        token: { colorPrimary: "#00b96b" },
      }}
    >
      <Layout>
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
          <Header style={{ padding: 0, margin: "24px 16px 0" }}>
            I am a header
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>FDMarketPulse ©2023</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
