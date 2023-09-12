import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import {
  FundFilled,
  FundOutlined,
  HomeFilled,
  HomeOutlined,
  ReadFilled,
  ReadOutlined,
  SlidersFilled,
  SlidersOutlined,
  ThunderboltFilled,
  ThunderboltOutlined,
  UserOutlined,
  WalletFilled,
  WalletOutlined,
} from "@ant-design/icons";
import MyLogo from "../../assets/logo.svg";

const { Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

const SideMenu = () => {
  const location = useLocation();
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const items: MenuItem[] = [
    {
      key: "/home",
      icon: hoveredIcon === "/home" ? <HomeFilled /> : <HomeOutlined />,
      label: (
        <Link
          to={"/home"}
          onMouseEnter={() => setHoveredIcon("/home")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          Home
        </Link>
      ),
    },
    // {
    //   key: "/macro",
    //   icon: hoveredIcon === "/macro" ? <SlidersFilled /> : <SlidersOutlined />,
    //   label: (
    //     <Link
    //       to={"/macro"}
    //       onMouseEnter={() => setHoveredIcon("/macro")}
    //       onMouseLeave={() => setHoveredIcon(null)}
    //     >
    //       Macro
    //     </Link>
    //   ),
    // },
    {
      key: "/gpt",
      icon:
        hoveredIcon === "/gpt" ? (
          <ThunderboltFilled />
        ) : (
          <ThunderboltOutlined />
        ),
      label: (
        <Link
          to={"/gpt"}
          onMouseEnter={() => setHoveredIcon("/gpt")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          Gpt
        </Link>
      ),
    },
    {
      key: "/news",
      icon: hoveredIcon === "/news" ? <ReadFilled /> : <ReadOutlined />,
      label: (
        <Link
          to={"/news"}
          onMouseEnter={() => setHoveredIcon("/news")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          News
        </Link>
      ),
    },
    {
      key: "/analysis",
      icon: hoveredIcon === "/analysis" ? <FundFilled /> : <FundOutlined />,
      label: (
        <Link
          to={"/analysis"}
          onMouseEnter={() => setHoveredIcon("/analysis")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          Analysis
        </Link>
      ),
    },
    {
      key: "/portfolio",
      icon:
        hoveredIcon === "/portfolio" ? <WalletFilled /> : <WalletOutlined />,
      label: (
        <Link
          to={"/portfolio"}
          onMouseEnter={() => setHoveredIcon("/portfolio")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          Portfolio
        </Link>
      ),
    },
    {
      key: "/user",
      icon: <UserOutlined />,
      label: "User",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", padding: 16 }}>
        <img src={MyLogo} alt="Logo" style={{ width: 100 }} />
      </div>
      <Menu
        mode="inline"
        theme="dark"
        selectedKeys={[location.pathname]}
        items={items}
      />
    </>
  );
};

export default SideMenu;
