import React from "react";
import HighchartsReact from "highcharts-react-official";
import HighStockCharts from "highcharts/highstock";
import { OhlcChartCleanStyle } from "@/components/charts/lineChart/ohlcChartCleanStyle";

type Props = {
  titleText: string;
  subtitleText: string;
  dataInput: (string | number)[][];
  lineData: (string | number)[][];
  xAxisType: string;
  yAxisTitle: string;
  fractionDigit: number;
};

const StockLineChart = ({
  titleText,
  subtitleText,
  dataInput,
  xAxisType,
  yAxisTitle,
  fractionDigit = 2,
  lineData,
}: Props) => {
  const createOption = () => {
    return {
      tooltip: {
        shared: false,
        useHTML: true,
        borderRadius: 15,
        borderWidth: 0,
        shadow: false,
        // backgroundColor: "rgba( 255, 255, 255, 0.25 )",
        style: {
          color: "#ebedf9",
        },
        // formatter: function () {
        //   return (
        //     '<div style="background-color:' +
        //     this.color +
        //     ';padding: 1rem;border-radius:1.5rem;box-shadow: 0 10px 15px rgba(52,72,187,0.16);transition: all 0.3s">' +
        //     "<strong>" +
        //     this.y.toFixed(fractionDigit) +
        //     " %" +
        //     "</strong></div>"
        //   );
        // },
      },
    };
  };
  const options = {
    ...OhlcChartCleanStyle(titleText, subtitleText, xAxisType, yAxisTitle),
    series: [
      {
        name: "",
        type: "line",
        data: lineData,
        crisp: true,
        color: "#00b96b",
        // upColor: "#B9004E",    // upColor: "#B9004E",
      },
    ],
    ...createOption(),
  };
  return (
    <div>
      <HighchartsReact
        highcharts={HighStockCharts}
        options={options}
        constructorType={"stockChart"}
        immutable={true}
        containerProps={{ style: { height: "100%" } }}
      />
    </div>
  );
};

export default StockLineChart;
