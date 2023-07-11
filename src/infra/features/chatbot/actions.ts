import {createAction, createAsyncAction} from "typesafe-actions";

import * as T from "./types";

export const SET_CHAT_GPT_RETURN = "SET_CHAT_GPT_RETURN";
export const FETCH_CHAT_GPT_REQUEST = "FETCH_CHAT_GPT_REQUEST";
export const FETCH_CHAT_GPT_SUCCESS = "FETCH_CHAT_GPT_SUCCESS";
export const FETCH_CHAT_GPT_FAILURE = "FETCH_CHAT_GPT_FAILURE";

export const setChatGptReturn = createAction(SET_CHAT_GPT_RETURN)<T.chatReturns>();

export const fetchChatGptReturn = createAsyncAction(
    FETCH_CHAT_GPT_REQUEST,
    FETCH_CHAT_GPT_SUCCESS,
    FETCH_CHAT_GPT_FAILURE
)<T.chatReturns, T.chatReturns, void>();