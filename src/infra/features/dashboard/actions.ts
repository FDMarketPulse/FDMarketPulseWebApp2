import { createAsyncAction } from "typesafe-actions";

import * as T from "./types";

export const fetchMarketSecIndReturns = createAsyncAction(
  "FETCH_MARKET_SECTOR_REQUEST",
  "FETCH_MARKET_SECTOR_SUCCESS",
  "FETCH_MARKET_SECTOR_FAILURE"
)<void, T.SecIndReturns[], void>();

export const fetchSecIndReturns = createAsyncAction(
  "FETCH_SECTOR_INDUSTRY_REQUEST",
  "FETCH_SECTOR_INDUSTRY_SUCCESS",
  "FETCH_SECTOR_INDUSTRY_FAILURE"
)<void, T.SecIndData, void>();

export const fetchMarketNewsOverall = createAsyncAction(
  "FETCH_MARKET_NEWS_REQUEST",
  "FETCH_MARKET_NEWS_SUCCESS",
  "FETCH_MARKET_NEWS_FAILURE"
)<void, T.NewsList, void>();

export const fetchMarketNewsContent = createAsyncAction(
  "FETCH_MARKET_NEWS_CONTENT_REQUEST",
  "FETCH_MARKET_NEWS_CONTENT_SUCCESS",
  "FETCH_MARKET_NEWS_CONTENT_FAILURE"
)<string, T.NewsContent, void>();
