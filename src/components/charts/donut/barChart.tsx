import React from "react";
import { Column } from "@ant-design/plots";

type Props = {
  title: string;
  dataInfos: valueData[];
};

interface valueData {
  type: string;
  value: number;
}

const BarColumn = ({ title, dataInfos }: Props) => {
  const data = dataInfos;
  const config = {
    data,
    xField: "type",
    yField: "value",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    columnStyle: {
      borderRadius:30
    },
    meta: {
      type: {
        alias: "type",
      },
      value: {
        alias: "%",
      },
    },
  };
  return <Column {...config} />;
};

export default BarColumn;
