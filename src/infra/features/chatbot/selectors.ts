import {RootState} from "@/infra/rootState";


export const chatGptReturn = ({ chatbot }: RootState) =>
     chatbot.chatReturns

export const isChatGptReturnLoading = ({ chatbot }: RootState) =>
    chatbot.status.chatReturns === "REQUEST";
