import axios, { AxiosResponse } from "axios";


const api = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL
});

export const fetchChat = (payload: any): Promise<AxiosResponse<any>> => {
    return api.post("/chat/chat", payload);
};

export const fetchNewSentiment = (payload: any): Promise<AxiosResponse<any>> => {
    return api.post("/chat/news-sentiment", payload);
};

export const fetchNewSentimentTranslate = (payload: any): Promise<AxiosResponse<any>> => {
    return api.post("/chat/news-sentiment-translation", payload);
};
export default api;
