import { RootState } from "@/infra/rootState";

export const chatGptReturn = ({ chatbot }: RootState) => chatbot.chatReturns;
export const docGptReturn = ({ chatbot }: RootState) => chatbot.docMessage;

export const newsSentimentGpt = ({ chatbot }: RootState) =>
  chatbot.newsSentiment;

export const tranNewsSentimentGpt = ({ chatbot }: RootState) =>
  chatbot.tranNewsSentiment;

export const fileUrl = ({ chatbot }: RootState) => chatbot.fileUpload;
export const fileList = ({ chatbot }: RootState) => chatbot.fileList;
export const qnaResp = ({ chatbot }: RootState) => chatbot.qnaResp;

export const isFileLoading = ({ chatbot }: RootState) =>
  chatbot.status.fileUpload === "REQUEST";
export const isQnARespLoading = ({ chatbot }: RootState) =>
  chatbot.status.qnaResp === "REQUEST";

export const isNewsSentimentLoading = ({ chatbot }: RootState) =>
  chatbot.status.newsSentiment === "REQUEST";

export const isTranslationNewsSentimentLoading = ({ chatbot }: RootState) =>
  chatbot.status.tranNewsSentiment === "REQUEST";

export const isChatGptReturnLoading = ({ chatbot }: RootState) =>
  chatbot.status.chatReturns === "REQUEST";

export const isDocGptReturnLoading = ({ chatbot }: RootState) =>
  chatbot.status.docMessage === "REQUEST";

export const stockAnalysis = ({ chatbot }: RootState) => chatbot.stockAnalysis;

export const isStockAnalysisLoading = ({ chatbot }: RootState) =>
  chatbot.status.stockAnalysis === "REQUEST";
