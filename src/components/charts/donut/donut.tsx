import React from "react";
import { Pie } from "@ant-design/plots";

interface valueData {
  type: string;
  value: number;
}

interface typeList {
  data: valueData[];
}

const DonutPie: React.FC<valueData[]> = (props) => {
  const inputData = props["data"];
  const config = {
    appendPadding: 10,
    data:inputData,
    theme: "dark",
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.64,
    meta: {
      value: {
        formatter: (v) => `USD ${v}`,
      },
    },
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
        fill: "#fff",
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        // content: 'AntV\nG2Plot',
      },
    },
  };
  return <Pie {...config} />;
};

export default DonutPie;
