import AllActions from "@/infra/rootAction";

import produce from "immer";
import {getType} from "typesafe-actions";

import * as A from "./actions";
import {defaultState} from "./defaults";

export default (state = defaultState, action: AllActions) =>
    produce(state, (draft) => {
        switch (action.type) {

            case getType(A.setChatGptReturn):
                draft.chatReturns = action.payload;
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

        }
    });
