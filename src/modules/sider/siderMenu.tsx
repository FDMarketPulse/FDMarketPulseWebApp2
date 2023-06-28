import {
  FundFilled,
  HomeFilled,
  ReadFilled,
  UserOutlined,
  WalletFilled,
} from "@ant-design/icons";

import React from "react";
import { Menu, MenuProps } from "antd";
import { Link, useLocation } from "react-router-dom";

const SiderMenu = () => {
  const location = useLocation();
  console.log(location.pathname);
  const data = [
    {
      key: "/home",
      icon: HomeFilled,
      label: (
        <Link exact to={"/home"}>
          <span>Home</span>
        </Link>
      ),
    },
    {
      key: "/news",
      icon: ReadFilled,
      label: (
        <Link exact to={"/news"}>
          <span>News</span>
        </Link>
      ),
    },
    {
      key: "/analysis",
      icon: FundFilled,
      label: (
        <Link exact to={"/analysis"}>
          <span>Analysis</span>
        </Link>
      ),
    },
    {
      key: "/portfolio",
      icon: WalletFilled,
      label: (
        <Link exact to={"/portfolio"}>
          <span>Portfolio</span>
        </Link>
      ),
    },
    {
      key: "/user",
      icon: UserOutlined,
      label: "User",
    },
  ];
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click", e);
  };
  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultSelectedKeys={[location.pathname]}
      onClick={onClick}
      items={data.map((d) => ({
        key: d.key,
        icon: React.createElement(d.icon),
        label: d.label,
      }))}
    />
  );
};

export default SiderMenu;
