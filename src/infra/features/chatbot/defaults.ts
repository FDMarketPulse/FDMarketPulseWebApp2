import * as T from "./types";
import { LoadingState } from "./types";

// initial~
export const defaultState: T.Store = {
    status: {
        chatReturns:"SUCCESS",
        newsSentiment:"SUCCESS",
        apiKey:"SUCCESS",
        tranNewsSentiment:"SUCCESS"
    },
    apiKey:"",
    chatReturns:{message:"",apiKey:"",chatHistory:[{role:"assistant",content:"Hi, this is FDMarketPulse GPT 3.5 Assistant."}]},
    newsSentiment:{sentiment: "",
        sentimentScore:"",
        direction:"",
        stocksTagList:[],
        sentimentSummary:""},
    tranNewsSentiment:{
        translation:"",
        sentiment: "",
        sentimentScore:"",
        direction:"",
        stocksTagList:[],
        sentimentSummary:""
    }
};

