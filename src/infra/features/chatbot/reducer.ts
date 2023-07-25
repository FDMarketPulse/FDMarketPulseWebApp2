import AllActions from "@/infra/rootAction";

import produce from "immer";
import { getType } from "typesafe-actions";

import * as A from "./actions";
import { defaultState } from "./defaults";

export default (state = defaultState, action: AllActions) =>
    produce(state, (draft) => {
        switch (action.type) {
            case getType(A.setGptApiKey):
                draft.apiKey = action.payload;
                break

            case getType(A.resetTransNewsSentiment):
                draft.tranNewsSentiment = {
                    translation:"",
                    sentiment: "",
                    sentimentScore:"",
                    direction:"",
                    stocksTagList:[],
                    sentimentSummary:""
                }
                break
            case getType(A.setChatGptReturn):
                draft.chatReturns = action.payload;
                break;

            case getType(A.setNewsSentimentToReq):
                draft.status.newsSentiment = "REQUEST"
                break;


            case getType(A.fetchChatGptReturn.request):
                draft.status.chatReturns = "REQUEST";
                break;
            case getType(A.fetchChatGptReturn.failure):
                draft.status.chatReturns = "FAILURE";
                break;
            case getType(A.fetchChatGptReturn.success):
                draft.status.chatReturns= "SUCCESS";
                draft.chatReturns = action.payload;
                break;

            case getType(A.fetchNewsSentiment.request):
                draft.status.newsSentiment = "REQUEST";
                break;
            case getType(A.fetchNewsSentiment.failure):
                draft.status.newsSentiment = "FAILURE";
                break;
            case getType(A.fetchNewsSentiment.success):
                draft.status.newsSentiment= "SUCCESS";
                draft.newsSentiment = action.payload;
                break;


            case getType(A.fetchTranNewsSentiment.request):
                draft.status.tranNewsSentiment = "REQUEST";
                break;
            case getType(A.fetchTranNewsSentiment.failure):
                draft.status.tranNewsSentiment = "FAILURE";
                break;
            case getType(A.fetchTranNewsSentiment.success):
                draft.status.tranNewsSentiment= "SUCCESS";
                draft.tranNewsSentiment = action.payload;
                break;

            case getType(A.fetchQnA.request):
                draft.status.qnaResp = "REQUEST";
                break;
            case getType(A.fetchQnA.failure):
                draft.status.qnaResp = "FAILURE";
                break;
            case getType(A.fetchQnA.success):

                draft.status.qnaResp= "SUCCESS";
                draft.qnaResp = action.payload;
                break;

        }
    });
