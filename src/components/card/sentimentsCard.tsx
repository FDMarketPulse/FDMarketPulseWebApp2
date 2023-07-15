import { Card, Tag } from "antd";

interface SentimentsData {
  sentiment: string;
  sentimentScore: string;
  direction: string;
  stocksTagList: string[];
  sentimentSummary: string;
}

const SentimentsCard: React.FC<{ data: SentimentsData }> = ({ data }) => {
  const { sentiment, sentimentScore, direction, stocksTagList, sentimentSummary } = data;

  let backgroundColor: string;
  if (sentiment === "positive") {
    backgroundColor = "#52c41a";
  } else if (sentiment === "negative") {
    backgroundColor = "#f5222d";
  } else {
    backgroundColor = "#1890ff"; // Blue color for neutral sentiment (you can change it as needed)
  }

  return (
    <Card
      title={`Sentiment: ${sentiment}`}
      style={{ width: "100%"}}
      headStyle={{ backgroundColor, color: "#fff" }}
      block = {true}
    >
      <p>
        <strong>Sentiment Score (-5 to 5) : </strong>
        {sentimentScore}
      </p>
      <p>
        <strong>Direction: </strong>
        {direction}
      </p>
      <p>
        <strong>Stocks: </strong>
        {stocksTagList.map((stock) => (
          <Tag key={stock}>{stock}</Tag>
        ))}
      </p>
      <p>
        <strong>Sentiment Summary: </strong>
        {sentimentSummary}
      </p>
    </Card>
  );
};

export default SentimentsCard;
