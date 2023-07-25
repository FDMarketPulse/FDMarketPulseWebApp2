import React, { useMemo } from 'react';
import { Card, Tag } from 'antd';

interface SentimentsData {
  sentiment: string;
  sentimentScore: string;
  direction: string;
  stocksTagList: string[];
  sentimentSummary: string;
}

interface Props {
  data: SentimentsData;
}

const SentimentsCard: React.FC<Props> = ({ data: { sentiment, sentimentScore, direction, stocksTagList, sentimentSummary } }) => {

  const backgroundColor = useMemo(() => {
    switch(sentiment) {
      case 'positive': return '#00b96b';
      case 'negative': return '#F72585';
      default: return '#D3D3D3';
    }
  }, [sentiment]);
  return (
    <Card
      title={`Sentiment: ${sentiment}`}
      style={{ width: "100%"}}
      headStyle={{ backgroundColor, color: "#fff" }}
      block = {true}
    >
      <p><strong>Sentiment Score (-5 to 5): </strong>{sentimentScore}</p>
      <p><strong>Direction: </strong>{direction}</p>
      <p>
        <strong>Stocks: </strong>
        {stocksTagList.map((stock) => <Tag key={stock}>{stock}</Tag>)}
      </p>
      <p><strong>Sentiment Summary: </strong>{sentimentSummary}</p>
    </Card>
  );
};

export default SentimentsCard;
