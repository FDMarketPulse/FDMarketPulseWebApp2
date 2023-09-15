import * as T from "./types";

// initial~
export const defaultState: T.Store = {
  status: {
    chatReturns: "SUCCESS",
    newsSentiment: "SUCCESS",
    apiKey: "SUCCESS",
    tranNewsSentiment: "SUCCESS",
    qnaResp: "SUCCESS",
    fileUpload: "SUCCESS",
    docMessage: "SUCCESS",
    stockAnalysis: "SUCCESS",
  },
  apiKey: "",
  chatReturns: {
    message: "",
    apiKey: "",
    chatHistory: [
      {
        role: "assistant",
        content: "Hi, this is FDMarketPulse GPT Assistant.",
      },
    ],
  },
  newsSentiment: {
    sentiment: "",
    sentimentScore: "",
    direction: "",
    stocksTagList: [],
    sentimentSummary: "",
  },
  tranNewsSentiment: {
    translation: "",
    sentiment: "",
    sentimentScore: "",
    direction: "",
    stocksTagList: [],
    sentimentSummary: "",
  },
  qnaResp: {
    resp: "",
  },
  fileUpload: "",
  fileList: [],
  docMessage: {
    message: "",
    deleteIndex: false,
    chatHistory: [
      {
        role: "assistant",
        content: "Hi, this is FDMarketPulse GPT 3.5 Assistant.",
      },
    ],
    docHistory: [],
  },
  stockAnalysis: {
    result: {
      input: "",
      output: "",
    },
    tickers: [],
  },
};
