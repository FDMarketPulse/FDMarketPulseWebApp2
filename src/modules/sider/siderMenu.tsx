import {
  FundFilled,
  HomeFilled,
  UserOutlined,
  WalletFilled,
} from "@ant-design/icons";

import React from "react";
import { Menu, MenuProps } from "antd";
import { Link } from "react-router-dom";
import Home from "@/modules/home/home";

const SiderMenu = () => {
  const data = [
    {
      icon: HomeFilled,
      label: (
        <Link to={"/home"}>
          <span>Home</span>
        </Link>
      ),
    },
    {
      icon: FundFilled,
      label: "Analysis",
    },
    {
      icon: WalletFilled,
      label: (
        <Link to={"/portfolio"}>
          <span>Portfolio</span>
        </Link>
      ),
    },
    {
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
      defaultSelectedKeys={["3"]}
      onClick={onClick}
      items={data.map((d, i) => ({
        key: String(i + 1),
        icon: React.createElement(d.icon),
        label: d.label,
      }))}
    />
  );
};

export default SiderMenu;
