import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { BarChartCleanStyle } from "@/components/charts/barChart/barChartCleanStyle";

type Props = {
  titleText: string;
  subtitleText: string;
  dataInput: (string | number)[][];
  xAxisType: string;
  yAxisTitle: string;
  fractionDigit: number;
};

const BarChart = ({
  titleText,
  subtitleText,
  dataInput,
  xAxisType,
  yAxisTitle,
  fractionDigit = 2,
}: Props) => {
  const createOption = () => {
    return {
      tooltip: {
        shared: false,
        useHTML: true,
        borderRadius: 15,
        borderWidth: 0,
        shadow: false,
        backgroundColor: "rgba( 255, 255, 255, 0.25 )",
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
    ...BarChartCleanStyle(titleText, subtitleText, xAxisType, yAxisTitle),
    series: [
      {
        name: "",
        type: "column",
        data: dataInput,
        crisp: true,
        borderWidth: 0,
        borderRadius: 5,
        maxPointWidth: 18,
        zones: [
          {
            value: 0,
            color: "#F72585",
          },
          {
            color: "#00b96b",
          },
        ],
      },
    ],
    ...createOption(),
  };
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
