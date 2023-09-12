import React, { useEffect } from "react";
import { useRootSelector } from "@/infra/hooks";
import { DashAction, DashSel } from "@/infra/features/dashboard";
import OhlcChart from "@/components/charts/lineChart/ohlcChart";
import { useDispatch } from "react-redux";

const Macro = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DashAction.fetchMarketMacroOhlc.request());
  }, [dispatch]);
  const MacroDataTimeSeries = useRootSelector(DashSel.marketMacroOhlcData);
  const testData = MacroDataTimeSeries.filter((e) => e.ticker === "^TNX")?.map(
    (d) => [d.date, d.open, d.high, d.low, d.close]
  );
  return (
    <div>
      <OhlcChart
        titleText={"10-Year Treasury Note Yield"}
        subtitleText={"%"}
        dataInput={testData}
        xAxisType={""}
        yAxisTitle={"%"}
        fractionDigit={2}
      />
    </div>
  );
};

export default Macro;
