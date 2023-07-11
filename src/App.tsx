import React, {useEffect} from "react";
import {ConfigProvider, Layout, theme} from "antd";
import SiderMenu from "@/modules/sider/siderMenu";
import {Outlet} from "react-router-dom";
import {useDispatch} from "react-redux";
import {DashAction} from "@/infra/features/dashboard";
import FloatingChatWindow from "@/modules/chatbot/floatingChatWindow";

const { darkAlgorithm } = theme;
const { Header, Content, Footer, Sider } = Layout;
const currentYear = new Date().getFullYear();
const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DashAction.fetchSecIndReturns.request());
    dispatch(DashAction.fetchMarketNewsOverall.request());
    dispatch(DashAction.fetchMarketMacroOhlc.request());
  }, [dispatch]);
  return (
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}>
    <ConfigProvider
      theme={{
        algorithm: [darkAlgorithm],
        token: { colorPrimary: "#00b96b" },
      }}
    >
      <Layout>
        <FloatingChatWindow/>
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
        <Layout style={{ minHeight: "100vh" }}>
          <Content
            style={{ margin: "24px 16px 0" ,flexGrow: 1 }}
          >

            <div style={{ position: "relative", height: "100%" }}>
              <div style={{ padding: 24, minHeight: "100%" }}>
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
      </div>
  );
};

export default App;
