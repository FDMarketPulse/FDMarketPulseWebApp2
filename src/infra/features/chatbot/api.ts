import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export const fetchChat = (payload: any): Promise<AxiosResponse<any>> => {
  return api.post("/chat/chat", payload);
};

export const fetchChatGpt4 = (payload: any): Promise<AxiosResponse<any>> => {
  return api.post("/chat/chat-v2", payload);
};

export const fetchNewSentiment = (
  payload: any
): Promise<AxiosResponse<any>> => {
  return api.post("/chat/news-sentiment", payload);
};

export const fetchNewSentimentTranslate = (
  payload: any
): Promise<AxiosResponse<any>> => {
  return api.post("/chat/news-sentiment-translation", payload);
};

export const fetchQnAResp = (payload: any): Promise<AxiosResponse<any>> => {
  return api.post("/chat/qna", payload);
};

export const fetchDocChat = (payload: any): Promise<AxiosResponse<any>> => {
  return api.post("/chat/chat-docs", payload);
};

export const fetchStockAnalysis = (
  payload: any
): Promise<AxiosResponse<any>> => {
  return api.post("/chat/stock_analysis", payload);
};

export default api;
