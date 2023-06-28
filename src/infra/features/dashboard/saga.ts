import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";
import * as A from "./actions";
import * as T from "./types";
import { camelizeKeys } from "humps";

export function* fetchMarketSecIndReturns() {
  try {
    const { data }: AxiosResponse<T.SecIndReturns[]> = yield call(
      axios.get,
      "http://127.0.0.1:8082/sector/sector-overview"
    );

    yield put(A.fetchMarketSecIndReturns.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchMarketSecIndReturns.failure());
  }
}

export function* fetchSecIndReturns() {
  try {
    const { data }: AxiosResponse<T.SecIndData> = yield call(
      axios.get,
      "http://127.0.0.1:8082/sector-industry/industry-sector-overview"
    );

    yield put(A.fetchSecIndReturns.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchSecIndReturns.failure());
  }
}

export function* fetchMarketNewsOverall() {
  try {
    const { data }: AxiosResponse<T.NewsList[]> = yield call(
      axios.get,
      "http://127.0.0.1:8082/news/news-info"
    );

    yield put(A.fetchMarketNewsOverall.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchMarketNewsOverall.failure());
  }
}

export function* fetchMarketNewsContent({
  payload,
}: ReturnType<typeof A.fetchMarketNewsContent.request>) {
  try {
    const { data }: AxiosResponse<T.NewsContent> = yield call(
      axios.get,
      `http://127.0.0.1:8082/news/details-news-via-id/${payload}`
    );

    yield put(A.fetchMarketNewsContent.success(data));
  } catch (e) {
    yield put(A.fetchMarketNewsContent.failure());
  }
}

export default function* () {
  yield all([
    takeLatest(A.fetchMarketSecIndReturns.request, fetchMarketSecIndReturns),
    takeLatest(A.fetchSecIndReturns.request, fetchSecIndReturns),
    takeLatest(A.fetchMarketNewsOverall.request, fetchMarketNewsOverall),
    takeLatest(A.fetchMarketNewsContent.request, fetchMarketNewsContent),
  ]);
}
