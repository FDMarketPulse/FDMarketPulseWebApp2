import axios, {AxiosResponse} from "axios";


const api = axios.create({
    baseURL:"https://fd-market-pulse-api.onrender.com"
});

export const fetchChat = (payload: any): Promise<AxiosResponse<any>> => {
    console.log("Call API")
    return api.post("/chat/chat", payload);
};

export default api;
