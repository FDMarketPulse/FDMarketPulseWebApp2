import React from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Typography,
  DatePicker,
} from "antd";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { PulseLoader } from "react-spinners";

const { Option } = Select;
const { Title, Paragraph } = Typography;
const { RangePicker } = DatePicker;

const StockAnalysisForm: React.FC = () => {
  const dispatch = useDispatch();
  const result = useRootSelector(ChatSel.stockAnalysis);
  const isStockAnalysisLoading = useRootSelector(
    ChatSel.isStockAnalysisLoading
  );

  const onFinish = async (values: any) => {
    // startDate: values.dates[0].format("YYYY-MM-DD"),
    // endDate: values.dates[1].format("YYYY-MM-DD"),
    await dispatch(
      ChatAction.fetchStockAnalysis.request({
        query: values.query + "", // Use the input value for the query
        tickers: values.tickers,
        start: values.dates[0].format("YYYY-MM-DD"),
        end: values.dates[1].format("YYYY-MM-DD"),
      })
    );
  };

  const options = [
    "SPY",
    "MSFT",
    "TSLA",
    // Add other possible ticker values
  ];

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        query: "Calculate MACD on each stock",
        // dates: [moment().subtract(5, "years"), moment()],
      }} // Set the default values for the query and date inputs
    >
      <Form.Item label="Query" name="query">
        <Input />
      </Form.Item>
      <Form.Item
        label="Tickers"
        name="tickers"
        rules={[{ required: true, message: "Please input tickers!" }]}
      >
        <Select mode="tags" style={{ width: 200 }}>
          {options.map((ticker) => (
            <Option key={ticker} value={ticker}>
              {ticker}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Date Range"
        name="dates"
        rules={[{ required: true, message: "Please select a date range!" }]}
      >
        <RangePicker />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Analyze
        </Button>
      </Form.Item>
      {isStockAnalysisLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <PulseLoader color={"#00b96b"} size={15} />
        </div>
      ) : (
        <Card>
          {result.result.output.split("\n").map((line, index) => (
            <Paragraph key={index}>{line}</Paragraph>
          ))}
        </Card>
      )}
    </Form>
  );
};

export default StockAnalysisForm;
