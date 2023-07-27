import { createAction, createAsyncAction } from "typesafe-actions";
import * as T from "./types";
import * as AT from './actionTypes';

export const setChatGptReturn = createAction(AT.SET_CHAT_GPT_RETURN)<T.chatReturns>();
export const setGptApiKey = createAction(AT.SET_GPT_API_KEY)<string>();

export const fetchChatGptReturn = createAsyncAction(
  AT.FETCH_CHAT_GPT_REQUEST,
  AT.FETCH_CHAT_GPT_SUCCESS,
  AT.FETCH_CHAT_GPT_FAILURE
)<T.chatReturns, T.chatReturns, void>();

export const setNewsSentimentToReq = createAction(AT.SET_NEWS_SENTIMENT_REQUEST)<string>()
export const resetTransNewsSentiment = createAction(AT.RESET_TRANS_NEWS_SENTIMENT )<string>()

export const fetchNewsSentiment = createAsyncAction(
  AT.FETCH_NEWS_SENTIMENT_REQUEST,
  AT.FETCH_NEWS_SENTIMENT_SUCCESS,
  AT.FETCH_NEWS_SENTIMENT_FAILURE
)<T.chatRequest, T.newsSentiment, void>();

export const fetchTranNewsSentiment = createAsyncAction(
  AT.FETCH_NEWS_TRAN_SENTIMENT_REQUEST,
  AT.FETCH_NEWS_TRAN_SENTIMENT_SUCCESS,
  AT.FETCH_NEWS_TRAN_SENTIMENT_FAILURE
)<T.chatRequest, T.translateNewsSentiment, void>();

export const fetchQnA = createAsyncAction(
  AT.FETCH_QNA_REQUEST,
  AT.FETCH_QNA_SUCCESS,
  AT.FETCH_QNA_FAILURE
)<T.qnaReturn,T.qnaResp,void>()
