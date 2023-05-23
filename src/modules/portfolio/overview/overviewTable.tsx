import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import StockDataDummy from "@/modules/portfolio/overview/dummyDataStock";

interface DataType {
  key: React.Key;
  type: string;
  instrument: string;
  quantity: number;
  currency: string;
  open: number;
  currentPrice: number;
  changePct: number;
  marketValue: number;
  tradePL: number;
  portfolioPct: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Instrument",
    dataIndex: "instrument",
    // filters: [
    //     {
    //         text: 'Joe',
    //         value: 'Joe',
    //     },
    //     {
    //         text: 'Jim',
    //         value: 'Jim',
    //     },
    //     {
    //         text: 'Submenu',
    //         value: 'Submenu',
    //         children: [
    //             {
    //                 text: 'Green',
    //                 value: 'Green',
    //             },
    //             {
    //                 text: 'Black',
    //                 value: 'Black',
    //             },
    //         ],
    //     },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.instrument.length - b.instrument.length,
    render: (_, record) => (
      <Space size={4}>
        <div>
          <Tag color={record.type == "EQ" ? "geekblue" : "green"}>
            {record.type}
          </Tag>
        </div>
        <div>{record.instrument}</div>
      </Space>
    ),
    sortDirections: ["descend"],
  },
  {
    title: "Currency",
    dataIndex: "currency",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.currency.length - b.currency.length,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    sorter: (a, b) => a.quantity - b.quantity,
    // filters: [
    //     {
    //         text: 'London',
    //         value: 'London',
    //     },
    //     {
    //         text: 'New York',
    //         value: 'New York',
    //     },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Open price",
    dataIndex: "open",
    sorter: (a, b) => a.open - b.open,
    // filters: [
    //     {
    //         text: 'London',
    //         value: 'London',
    //     },
    //     {
    //         text: 'New York',
    //         value: 'New York',
    //     },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Current price",
    dataIndex: "currentPrice",
    sorter: (a, b) => a.currentPrice - b.currentPrice,
    // filters: [
    //     {
    //         text: 'London',
    //         value: 'London',
    //     },
    //     {
    //         text: 'New York',
    //         value: 'New York',
    //     },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "% Change",
    dataIndex: "changePct",
    sorter: (a, b) => a.changePct - b.changePct,
    // filters: [
    //     {
    //         text: 'London',
    //         value: 'London',
    //     },
    //     {
    //         text: 'New York',
    //         value: 'New York',
    //     },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Market Value (USD)",
    dataIndex: "marketValue",
    sorter: (a, b) => a.marketValue - b.marketValue,
    // filters: [
    //     {
    //         text: 'London',
    //         value: 'London',
    //     },
    //     {
    //         text: 'New York',
    //         value: 'New York',
    //     },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Trade P/L (USD)",
    dataIndex: "tradePL",
    sorter: (a, b) => a.tradePL - b.tradePL,
    // filters: [
    //     {
    //         text: 'London',
    //         value: 'London',
    //     },
    //     {
    //         text: 'New York',
    //         value: 'New York',
    //     },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
  {
    title: "Portfolio %",
    dataIndex: "portfolioPct",
    sorter: (a, b) => a.portfolioPct - b.portfolioPct,
    // filters: [
    //     {
    //         text: 'London',
    //         value: 'London',
    //     },
    //     {
    //         text: 'New York',
    //         value: 'New York',
    //     },
    // ],
    // onFilter: (value: string, record) => record.address.indexOf(value) === 0,
  },
];

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log("params", pagination, filters, sorter, extra);
};

const OverviewTable = () => {
  return (
    <Table columns={columns} dataSource={StockDataDummy} onChange={onChange} />
  );
};

export default OverviewTable;
