export const BarChartCleanStyle = (
  titleText: string,
  subtitleText: string,
  typeOfXAxis: string,
  yAxisTitle: string
) => {
  return {
    chart: {
      borderRadius: 10,
      style: {
        font: '"Rubik", Verdana, sans-serif',
      },
      backgroundColor: "transparent",
    },
    title: {
      y: 30,
      x: 0,
      useHTML: true,
      align: "left",
      margin: 50,
      text: titleText,
      style: {
        color: "#b7b7b7",
        font: 'bold 18px "Rubik", Verdana, sans-serif',
      },
    },
    subtitle: {
      y: 5,
      x: 0,
      align: "left",
      text: subtitleText,
      style: {
        color: "#b7b7b7",
        fontSize: 16,
        fontFamily: '"Rubik", Verdana, sans-serif',
      },
    },
    xAxis: {
      alignTicks: false,
      gridLineWidth: 0,
      type: typeOfXAxis,
      lineColor: "rgb(248 249 250)",
      lineWidth: 1,
      tickLength: 0,
      labels: {
        style: {
          color: "#ebedf9",
          fontSize: "12px",
        },
      },
    },
    yAxis: {
      gridLineWidth: 1,
      gridLineDashStyle: "Dash",
      gridLineColor: "#545454",
      labels: {
        style: {
          color: "#ebedf9",
        },
      },
      title: {
        text: yAxisTitle,
        align: "high",
        offset: 0,
        rotation: 0,
        y: -15,
        x: -15,
        style: {
          color: "#b7b7b7",
          font: 'regular 12px "Rubik", Verdana, sans-serif',
        },
      },
    },
    legend: {
      enabled: false,
      align: "center",
      verticalAlign: "top",
      itemStyle: { color: "#545454", fontWeight: "400", fontFamily: "Rubik" },
      itemHoverStyle: {
        color: "gray",
      },
    },
    credits: false,
  };
};
