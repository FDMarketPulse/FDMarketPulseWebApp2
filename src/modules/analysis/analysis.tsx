import React, { useState } from "react";
import { useRootSelector } from "@/infra/hooks";
import { DashSel } from "@/infra/features/dashboard";
import BarChart from "@/components/charts/barChart/barChart";
import { Col, Row, Segmented } from "antd";

const AnalysisDashboard = () => {
  const sectorIndustryData = useRootSelector(DashSel.sectorIndustryReturn);
  const [activeCategory, setActiveCategory] = useState("sector");
  const handleCategoryChange = (index) => {
    setActiveCategory(index);
  };

  const [activeSegment, setActiveSegment] = useState("change");
  const handleSegmentChange = (index) => {
    setActiveSegment(index);
  };
  const retrievePerfDataViaType = (category: string, type: string) => {
    return (
      <>
        {["desc", "asc"].map((d) => (
          <Col span={24}>
            <BarChart
              titleText={d == "desc" ? "Top 5 %" : "Bottom 5 %"}
              subtitleText={""}
              dataInput={sectorIndustryData
                .find((a) => a.type === category)
                ?.value.map((d) => [d.description, d[type]])
                .sort((a: any, b: any) =>
                  d == "asc" ? a[1] - b[1] : b[1] - a[1]
                )
                .slice(0, 5)}
              xAxisType={"category"}
              yAxisTitle={""}
              fractionDigit={2}
            />
          </Col>
        ))}
      </>
    );
  };
  return (
    <div style={{zIndex:-1}}>
      <Segmented
        block
        size={"large"}
        options={[
          { label: "Sector", value: "sector" },
          { label: "Industry", value: "industry" },
        ]}
        onChange={handleCategoryChange}
      />
      <Segmented
        block
        options={[
          { label: "Daily", value: "change" },
          { label: "Weekly", value: "perfW" },
          { label: "Monthly", value: "perf1M" },
          { label: "Quarterly", value: "perf3M" },
          { label: "Yearly", value: "perfY" },
        ]}
        size="large"
        onChange={handleSegmentChange}
      />
      <Row>{retrievePerfDataViaType(activeCategory, activeSegment)}</Row>
    </div>
  );
};

export default AnalysisDashboard;
