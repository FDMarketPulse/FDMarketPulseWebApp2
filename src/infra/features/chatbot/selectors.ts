import { RootState } from "@/infra/rootState";


export const chatGptReturn = ({ chatbot }: RootState) =>
     chatbot.chatReturns

export const newsSentimentGpt =({ chatbot }: RootState) =>
  chatbot.newsSentiment

export const apiKey =({ chatbot }: RootState) =>
  chatbot.apiKey

export const isNewsSentimentLoading = ({ chatbot }: RootState) =>
  chatbot.status.newsSentiment === "REQUEST"

export const isChatGptReturnLoading = ({ chatbot }: RootState) =>
    chatbot.status.chatReturns === "REQUEST";
