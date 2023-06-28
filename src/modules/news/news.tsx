import React, { useEffect, useState } from "react";
import { useRootSelector } from "@/infra/hooks";
import { DashAction, DashSel } from "@/infra/features/dashboard";
import { Card, Col, List, Modal, Row, Tabs } from "antd";
import { useDispatch } from "react-redux";

const onChange = (key: string) => {
  console.log(key);
};

const News = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(DashAction.fetchMarketNewsOverall.request());
  }, [dispatch]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState("");
  const [id, setId] = useState("");
  const setModalOpen = () => {
    setIsModalOpen(true);
    console.log(id);
    dispatch(DashAction.fetchMarketNewsContent.request(id));
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const newsData = useRootSelector(DashSel.marketNewsOverall);
  const newsContent = useRootSelector(DashSel.marketNewsContent);
  const sentimentAnalysis = (sentimentNumber: number) => {
    switch (sentimentNumber) {
      case 1:
        return "positive";
        break;
    }
  };
  const newsTransformData = newsData.map((d, i) => {
    return {
      key: i + 1,
      label: d.type,
      children: (
        <List
          grid={{ gutter: 16, column: 2 }}
          dataSource={d.result.map((e, i) => {
            return {
              provider: e.provider,
              id: e.id,
              title: e.title,
              sentiment: e.sentiment,
              index: i,
              date: e.published,
            };
          })}
          renderItem={(item) => (
            <List.Item key={item.index}>
              <Card
                title={
                  <Row>
                    <Col span={8}>
                      <i>{item.provider}</i>
                    </Col>
                    <Col span={8}>
                      {item.sentiment > 0 ? "positive" : "negative"}
                    </Col>
                  </Row>
                }
                key={item.index}
              >
                {item.title}
                <br />
                <a
                  key="list-loadmore-more"
                  onClick={() => {
                    setModalOpen();
                    setContent(item.title);
                    setId(item.id);
                  }}
                >
                  more
                </a>
              </Card>
            </List.Item>
          )}
        />
      ),
    };
  });
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={newsTransformData}
        onChange={onChange}
      />
      <Modal
        title={content}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        {newsContent.content &&
          newsContent.content.map((c) => (
            <p>
              {c}
              <br />
            </p>
          ))}
      </Modal>
    </div>
  );
};

export default News;
