import { createAction, createAsyncAction } from "typesafe-actions";

import * as T from "./types";

export const SET_CHAT_GPT_RETURN = "SET_CHAT_GPT_RETURN";
export const SET_GPT_API_KEY = "SET_GPT_API_KEY"
export const RESET_TRANS_NEWS_SENTIMENT = "RESET_TRANS_NEWS_SENTIMENT"
export const SET_NEWS_SENTIMENT_REQUEST = "SET_NEWS_SENTIMENT_REQUEST"
export const FETCH_CHAT_GPT_REQUEST = "FETCH_CHAT_GPT_REQUEST";
export const FETCH_CHAT_GPT_SUCCESS = "FETCH_CHAT_GPT_SUCCESS";
export const FETCH_CHAT_GPT_FAILURE = "FETCH_CHAT_GPT_FAILURE";
export const FETCH_NEWS_SENTIMENT_REQUEST = "FETCH_NEWS_SENTIMENT_REQUEST"
export const FETCH_NEWS_SENTIMENT_SUCCESS = "FETCH_NEWS_SENTIMENT_SUCCESS"
export const FETCH_NEWS_SENTIMENT_FAILURE = "FETCH_NEWS_SENTIMENT_FAILURE"
export const FETCH_NEWS_TRAN_SENTIMENT_REQUEST = "FETCH_NEWS_TRAN_SENTIMENT_REQUEST"
export const FETCH_NEWS_TRAN_SENTIMENT_SUCCESS = "FETCH_NEWS_TRAN_SENTIMENT_SUCCESS"
export const FETCH_NEWS_TRAN_SENTIMENT_FAILURE = "FETCH_NEWS_TRAN_SENTIMENT_FAILURE"
export const FETCH_QNA_REQUEST = "FETCH_QNA_REQUEST"
export const FETCH_QNA_SUCCESS = "FETCH_QNA_SUCCESS"
export const FETCH_QNA_FAILURE = "FETCH_QNA_FAILURE"

export const setChatGptReturn = createAction(SET_CHAT_GPT_RETURN)<T.chatReturns>();
export const setGptApiKey = createAction(SET_GPT_API_KEY)<string>();

export const fetchChatGptReturn = createAsyncAction(
    FETCH_CHAT_GPT_REQUEST,
    FETCH_CHAT_GPT_SUCCESS,
    FETCH_CHAT_GPT_FAILURE
)<T.chatReturns, T.chatReturns, void>();

export const setNewsSentimentToReq = createAction(SET_NEWS_SENTIMENT_REQUEST)<string>()
export const resetTransNewsSentiment = createAction(RESET_TRANS_NEWS_SENTIMENT )<string>()

export const fetchNewsSentiment = createAsyncAction(
  FETCH_NEWS_SENTIMENT_REQUEST,
  FETCH_NEWS_SENTIMENT_SUCCESS,
  FETCH_NEWS_SENTIMENT_FAILURE
)<T.chatRequest, T.newsSentiment, void>();

export const fetchTranNewsSentiment = createAsyncAction(
  FETCH_NEWS_TRAN_SENTIMENT_REQUEST,
  FETCH_NEWS_TRAN_SENTIMENT_SUCCESS,
  FETCH_NEWS_TRAN_SENTIMENT_FAILURE
)<T.chatRequest, T.translateNewsSentiment, void>();

export const fetchQnA = createAsyncAction(
  FETCH_QNA_REQUEST,
  FETCH_QNA_SUCCESS,
  FETCH_QNA_FAILURE
)<T.qnaReturn,T.qnaResp,void>()