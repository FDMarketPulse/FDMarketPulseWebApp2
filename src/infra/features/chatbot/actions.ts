import {createAction, createAsyncAction} from "typesafe-actions";

import * as T from "./types";
import { chatRequest, newsSentiment } from "./types";

export const SET_CHAT_GPT_RETURN = "SET_CHAT_GPT_RETURN";
export const SET_GPT_API_KEY = "SET_GPT_API_KEY"
export const FETCH_CHAT_GPT_REQUEST = "FETCH_CHAT_GPT_REQUEST";
export const FETCH_CHAT_GPT_SUCCESS = "FETCH_CHAT_GPT_SUCCESS";
export const FETCH_CHAT_GPT_FAILURE = "FETCH_CHAT_GPT_FAILURE";
export const FETCH_NEWS_SENTIMENT_REQUEST = "FETCH_NEWS_SENTIMENT_REQUEST"
export const FETCH_NEWS_SENTIMENT_SUCCESS = "FETCH_NEWS_SENTIMENT_SUCCESS"
export const FETCH_NEWS_SENTIMENT_FAILURE = "FETCH_NEWS_SENTIMENT_FAILURE"

export const setChatGptReturn = createAction(SET_CHAT_GPT_RETURN)<T.chatReturns>();
export const setGptApiKey = createAction(SET_GPT_API_KEY)<string>();

export const fetchChatGptReturn = createAsyncAction(
    FETCH_CHAT_GPT_REQUEST,
    FETCH_CHAT_GPT_SUCCESS,
    FETCH_CHAT_GPT_FAILURE
)<T.chatReturns, T.chatReturns, void>();

export const fetchNewsSentiment = createAsyncAction(
  FETCH_NEWS_SENTIMENT_REQUEST,
  FETCH_NEWS_SENTIMENT_SUCCESS,
  FETCH_NEWS_SENTIMENT_FAILURE
)<T.chatRequest, T.newsSentiment, void>();
