import React from "react";
import {ConfigProvider, Layout, Menu, theme} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined,} from "@ant-design/icons";
import Portfolio from "@/modules/portfolio/portfolio";

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
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={["4"]}
            items={[
              UserOutlined,
              VideoCameraOutlined,
              UploadOutlined,
              UserOutlined,
            ].map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `nav ${index + 1}`,
            }))}
          />
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
              <Portfolio />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>FD Design ©2023</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
