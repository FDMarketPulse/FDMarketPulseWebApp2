import React, { useEffect } from "react";
import type { TabsProps } from "antd";
import { Tabs } from "antd";
import Overview from "@/modules/portfolio/overview/overview";
import PerformanceTab from "@/modules/portfolio/performance/performance";
import { useDispatch } from "react-redux";
import { DashAction, DashSel } from "@/infra/features/dashboard";
import { useRootSelector } from "@/infra/hooks";

const onChange = (key: string) => {
  console.log(key);
};

const Portfolio: React.FC = () => {

  const items: TabsProps["items"] = [
    {
      key: "overview",
      label: `Overview`,
      children: <Overview />,
    },
    {
      key: "performance",
      label: `Performance`,
      children: <PerformanceTab />,
    },
    {
      key: "corporate actions",
      label: `Corporate Actions`,
      children: `Content of corporate actions`,
    },
  ];

  return <Tabs defaultActiveKey="overview" items={items} onChange={onChange} />;
};

export default Portfolio;
