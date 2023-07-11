import React from 'react';
import {useRootSelector} from "@/infra/hooks";
import {DashSel} from "@/infra/features/dashboard";
import OhlcChart from "@/components/charts/lineChart/ohlcChart";

const Macro = () => {
    const MacroDataTimeSeries = useRootSelector(DashSel.marketMacroOhlcData)
    const testData = MacroDataTimeSeries.filter((e)=>e.ticker==="^TNX")?.map((d)=>([d.date,d.open,d.high,d.low,d.close]))
    return (
        <div>
           <OhlcChart titleText={"10-Year Treasury Note Yield"} subtitleText={"%"} dataInput={testData} xAxisType={""} yAxisTitle={"%"} fractionDigit={2}/>
        </div>
    );
};

export default Macro;
