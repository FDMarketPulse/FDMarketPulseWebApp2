import React, { useEffect } from "react";
import { useRootSelector } from "@/infra/hooks";
import { DashAction, DashSel } from "@/infra/features/dashboard";
import OhlcChart from "@/components/charts/lineChart/ohlcChart";
import { useDispatch } from "react-redux";
import StockLineChart from "@/components/charts/lineChart/stockLineChart";

const Macro = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DashAction.fetchMarketMacroOhlc.request());
  }, [dispatch]);
  const MacroDataTimeSeries = useRootSelector(DashSel.marketMacroOhlcData);
  const testData = MacroDataTimeSeries.filter((e) => e.ticker === "GC=F")?.map(
    (d) => [d.date, d.open, d.high, d.low, d.close, d.dailyReturn]
  );
  console.log(MacroDataTimeSeries);
  const lineTestData = MacroDataTimeSeries.filter(
    (e) => e.ticker === "GC=F"
  )?.map((d) => [d.date, d["daily_return"] * 100]);

  console.log(lineTestData);
  return (
    <div>
      <OhlcChart
        titleText={"Gold Price"}
        subtitleText={"%"}
        dataInput={testData}
        xAxisType={""}
        yAxisTitle={"%"}
        fractionDigit={2}
        lineData={lineTestData}
      />
      <StockLineChart
        titleText={"Gold Daily Return"}
        subtitleText={"%"}
        dataInput={testData}
        xAxisType={""}
        yAxisTitle={"%"}
        fractionDigit={2}
        lineData={lineTestData}
      />
    </div>
  );
};

export default Macro;
