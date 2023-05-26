import React from "react";
import { Card, Col, Divider, Row, Space, Statistic, Tabs } from "antd";
import AccountData from "@/modules/portfolio/dummyAccount";
import OverviewTable from "@/modules/portfolio/overview/overviewTable";
import CountUp from "react-countup";
import DonutPie from "@/components/charts/donut/donut";
import ChartsDummyData from "@/modules/portfolio/overview/chartsDummyData";

const formatter = (value: number) => <CountUp end={value} separator="," />;
const Overview = () => {
  return (
    <Row>
      <Col span={24}>
        <Space direction={"vertical"}>
          <Card>
            <Row align={"middle"}>
              {AccountData.map((d) => (
                <>
                  <Col span={12}>{d.name}</Col>
                  <Col span={12}>
                    <Statistic value={d.value} formatter={formatter} />
                  </Col>
                  <Divider />
                </>
              ))}
            </Row>
          </Card>
          <Card>
            <OverviewTable />
          </Card>
          <Card>
            <Tabs
              items={ChartsDummyData.map((d, i) => {
                return {
                  label: d["type"],
                  key: d["type"],
                  children: <DonutPie data={d["data"]} />,
                };
              })}
            />
          </Card>
        </Space>
      </Col>
    </Row>

  );
};

export default Overview;
