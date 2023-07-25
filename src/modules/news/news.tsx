import React, { useEffect, useState } from "react";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { DashAction, DashSel } from "@/infra/features/dashboard";
import { Card, Col, List, Modal, Row, Spin, Tabs } from "antd";
import { useDispatch } from "react-redux";
import SentimentsCard from "@/components/card/sentimentsCard";
import { formatDistanceToNow } from "date-fns";

const GPT_API_KEY = import.meta.env.VITE_GPT_API_KEY;

const onChange = (key: string) => {
    console.log(key);
};

const News = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState("");
    const [id, setId] = useState("");

    const newsData = useRootSelector(DashSel.marketNewsOverall);
    const newsContent = useRootSelector(DashSel.marketNewsContent);
    const newsSentiment = useRootSelector(ChatSel.newsSentimentGpt);
    const isNewsSentimentLoading = useRootSelector(ChatSel.isNewsSentimentLoading);
    const isNewsListLoading = useRootSelector(DashSel.isNewsLoading);

    useEffect(() => {
        dispatch(DashAction.fetchMarketNewsOverall.request());
    }, [dispatch]);

    useEffect(() => {
        if (newsContent.content) {
            const updatedPayload = {
                message: newsContent.content.join(" "),
                apiKey: GPT_API_KEY,
            };
            dispatch(ChatAction.fetchNewsSentiment.request(updatedPayload));
        }
    }, [newsContent.content, dispatch]);

    const setModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        dispatch(ChatAction.setNewsSentimentToReq(""))
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        dispatch(ChatAction.setNewsSentimentToReq(""))
    };

    const handleMoreClick = async (item) => {
        setContent(item.title);
        setId(item.id);
        dispatch(DashAction.fetchMarketNewsContent.request(item.id));
        setModalOpen();
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
                        index: i,
                        date: e.published,
                    };
                })}
                renderItem={(item) => (
                  <List.Item key={item.index}>
                      <Card
                        title={
                            <Row gutter={32}>
                                <Col span={8}>
                                    <i>{item.provider}</i>
                                </Col>
                                <Col span={8}>
                                    {formatDistanceToNow(new Date(Number(item.date) * 1000), { addSuffix: true })}
                                </Col>
                            </Row>
                        }
                        key={item.index}
                      >
                          {item.title}
                          <br />
                          <a
                            key="list-loadmore-more"
                            onClick={() => handleMoreClick(item)}
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
      <div style={{ height: "100%", overflow: "auto" }}>
          {isNewsListLoading ? (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
            }}>
                <Spin tip="Loading news..." size="large" />
            </div>
          ) : (
            <div>
                <Tabs defaultActiveKey="1" items={newsTransformData} onChange={onChange} />
                <Modal
                  title={content}
                  visible={isModalOpen}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  destroyOnClose={true}
                >
                    {isNewsSentimentLoading ? <Spin tip="Loading..." /> : <SentimentsCard data={newsSentiment}/>}
                    {newsContent.content &&
                      newsContent.content.map((c, index) => (
                        <p key={index}>
                            {c}
                            <br />
                        </p>
                      ))}
                    <br/>
                </Modal>
            </div>
          )}
      </div>
    );
};

export default News;
