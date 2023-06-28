import AllActions from "@/infra/rootAction";

import produce from "immer";
import { getType } from "typesafe-actions";

import * as A from "./actions";
import { defaultState } from "./defaults";

export default (state = defaultState, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.fetchMarketSecIndReturns.request):
        draft.status.sectorReturn = "REQUEST";
        break;
      case getType(A.fetchMarketSecIndReturns.failure):
        draft.status.sectorReturn = "FAILURE";
        break;
      case getType(A.fetchMarketSecIndReturns.success):
        draft.status.sectorReturn = "SUCCESS";
        draft.sectorReturn = action.payload;
        break;

      case getType(A.fetchSecIndReturns.request):
        draft.status.secIndData = "REQUEST";
        break;
      case getType(A.fetchSecIndReturns.failure):
        draft.status.secIndData = "FAILURE";
        break;
      case getType(A.fetchSecIndReturns.success):
        draft.status.secIndData = "SUCCESS";
        draft.secIndData = action.payload;
        break;

      case getType(A.fetchMarketNewsOverall.request):
        draft.status.newsList = "REQUEST";
        break;
      case getType(A.fetchMarketNewsOverall.failure):
        draft.status.newsList = "FAILURE";
        break;
      case getType(A.fetchMarketNewsOverall.success):
        draft.status.newsList = "SUCCESS";
        draft.newsList = action.payload;
        break;

      case getType(A.fetchMarketNewsContent.request):
        draft.status.newsContent = "REQUEST";
        break;
      case getType(A.fetchMarketNewsContent.failure):
        draft.status.newsContent = "FAILURE";
        break;
      case getType(A.fetchMarketNewsContent.success):
        draft.status.newsContent = "SUCCESS";
        draft.newsContent = action.payload;
        break;

    }
  });
