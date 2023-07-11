import axios, {AxiosResponse} from "axios";
import * as T from "./types";
import {API_BASE_URL} from "../../../../config";


const api = axios.create({
    baseURL:"http://137.184.4.164:8081"
});

console.log(API_BASE_URL)
export const fetchSectorOverview = (): Promise<AxiosResponse<T.SecIndReturns[]>> => {
    return api.get("/sector/sector-overview");
};

export const fetchIndustrySectorOverview = (): Promise<AxiosResponse<T.SecIndData>> => {
    return api.get("/sector-industry/industry-sector-overview");
};

export const fetchNewsInfo = (): Promise<AxiosResponse<T.NewsList[]>> => {
    return api.get("/news/news-info");
};

export const fetchNewsContent = (id: string): Promise<AxiosResponse<T.NewsContent>> => {
    return api.get(`/news/details-news-via-id/${id}`);
};

export const fetchMarketMacro = (): Promise<AxiosResponse<T.OhlcData[]>> => {
    return api.get("/macro/market-macro");
};

export default api;
