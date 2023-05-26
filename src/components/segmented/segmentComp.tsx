import React from "react";
import { Segmented } from "antd";

export default () => (
  <Segmented options={["1W", "1M", "1Y", "YTD", "All time"]} />
);
