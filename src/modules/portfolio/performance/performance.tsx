import React from "react";
import { Col, Row } from "antd";
import SegmentComp from "@/components/segmented/segmentComp";

const PerformanceTab = () => {
  return (
    <Row justify={"center"}>
      <Col span={24}>
        <SegmentComp />
      </Col>
    </Row>
  );
};

export default PerformanceTab;
