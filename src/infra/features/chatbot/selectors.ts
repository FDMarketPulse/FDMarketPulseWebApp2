import { RootState } from "@/infra/rootState";


export const chatGptReturn = ({ chatbot }: RootState) =>
     chatbot.chatReturns

export const newsSentimentGpt =({ chatbot }: RootState) =>
  chatbot.newsSentiment

export const tranNewsSentimentGpt = ({ chatbot }: RootState) =>
  chatbot.tranNewsSentiment

export const qnaResp = ({ chatbot }: RootState) =>
  chatbot.qnaResp

export const isQnARespLoading = ({ chatbot }: RootState) =>
  chatbot.status.qnaResp === "REQUEST"

export const isNewsSentimentLoading = ({ chatbot }: RootState) =>
  chatbot.status.newsSentiment === "REQUEST"

export const isTranslationNewsSentimentLoading = ({ chatbot }: RootState) =>
  chatbot.status.tranNewsSentiment === "REQUEST"

export const isChatGptReturnLoading = ({ chatbot }: RootState) =>
    chatbot.status.chatReturns === "REQUEST";
