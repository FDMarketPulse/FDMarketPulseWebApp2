import React, { useEffect, useState } from "react";
import { useRootSelector } from "@/infra/hooks";
import { ChatAction, ChatSel } from "@/infra/features/chatbot";
import { DashAction, DashSel } from "@/infra/features/dashboard";
import { Card, Col, List, Modal, Row, Tabs } from "antd";
import { useDispatch } from "react-redux";
import SentimentsCard from "@/components/card/sentimentsCard";

const onChange = (key: string) => {
    console.log(key);
};

const News = () => {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [content, setContent] = useState("");
    const [payload, setPayload] = useState({message:"",apiKey:""});
    const [id, setId] = useState("");

    const gptApiKey = useRootSelector(ChatSel.apiKey)
    const newsData = useRootSelector(DashSel.marketNewsOverall);
    const newsContent = useRootSelector(DashSel.marketNewsContent);
    const newsSentiment = useRootSelector(ChatSel.newsSentimentGpt)


    useEffect(() => {
        dispatch(DashAction.fetchMarketNewsOverall.request());
    }, [dispatch]);

    useEffect(() => {
        if (gptApiKey && newsContent.content) {
            const updatedPayload = {
                message: newsContent.content.join(" "),
                apiKey: gptApiKey,
            };
            dispatch(ChatAction.fetchNewsSentiment.request(updatedPayload));
        }
    }, [gptApiKey, newsContent.content, dispatch]);

    const setModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);

    };
    const handleCancel = () => {
        setIsModalOpen(false);
        dispatch(ChatAction.fetchNewsSentiment.success({
            sentiment: "",
            sentimentScore:"",
            direction:"",
            stocksTagList:[],
            sentimentSummary:""
        })); // Clear the newsSentiment
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
            <Tabs defaultActiveKey="1" items={newsTransformData} onChange={onChange} />
            <Modal
                title={content}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                destroyOnClose={true}
            >
                {gptApiKey && <SentimentsCard data={newsSentiment}/>}
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
    );
};

export default News;
