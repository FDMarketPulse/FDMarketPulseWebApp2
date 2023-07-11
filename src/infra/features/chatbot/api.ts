import axios, {AxiosResponse} from "axios";


const api = axios.create({
    baseURL:"http://137.184.4.164:8081"
});

export const fetchChat = (payload: any): Promise<AxiosResponse<any>> => {
    console.log("Call API")
    return api.post("/chat/chat", payload);
};

export default api;
