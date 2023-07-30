import {all, call, put, takeLatest} from "redux-saga/effects";
import * as A from "./actions";
import * as T from "./types";
import {camelizeKeys} from "humps";
import {
  fetchIndustrySectorOverview,
  fetchMarketMacro,
  fetchNewsContent,
  fetchNewsInfo,
  fetchSectorOverview,
} from "./api";
import {AxiosResponse} from "axios";
import {camelizeKeysMod} from "@/utils/camelizeKeys";

export function* fetchMarketSecIndReturns() {
  try {
    const { data }: AxiosResponse<T.SecIndReturns[]> = yield call(fetchSectorOverview);

    yield put(A.fetchMarketSecIndReturns.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchMarketSecIndReturns.failure());
  }
}

export function* fetchSecIndReturns() {
  try {
    const { data }: AxiosResponse<T.SecIndData> = yield call(fetchIndustrySectorOverview);

    yield put(A.fetchSecIndReturns.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchSecIndReturns.failure());
  }
}

export function* fetchMarketNewsOverall() {
  try {
    const { data }: AxiosResponse<T.NewsList[]> = yield call(fetchNewsInfo);

    yield put(A.fetchMarketNewsOverall.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchMarketNewsOverall.failure());
  }
}

export function* fetchMarketNewsContent({
                                          payload,
                                        }: ReturnType<typeof A.fetchMarketNewsContent.request>) {
  try {
    const { data }: AxiosResponse<T.NewsContent> = yield call(fetchNewsContent, payload);

    yield put(A.fetchMarketNewsContent.success(data));
  } catch (e) {
    yield put(A.fetchMarketNewsContent.failure());
  }
}

export function* fetchMarketMacroOhlc() {
  try {
    const { data }: AxiosResponse<T.OhlcData[]> = yield call(fetchMarketMacro);

    yield put(A.fetchMarketMacroOhlc.success(data));
  } catch (e) {
    yield put(A.fetchMarketMacroOhlc.failure());
  }
}

export default function* () {
  yield all([
    takeLatest(A.fetchMarketSecIndReturns.request, fetchMarketSecIndReturns),
    takeLatest(A.fetchSecIndReturns.request, fetchSecIndReturns),
    takeLatest(A.fetchMarketNewsOverall.request, fetchMarketNewsOverall),
    takeLatest(A.fetchMarketNewsContent.request, fetchMarketNewsContent),
    takeLatest(A.fetchMarketMacroOhlc.request, fetchMarketMacroOhlc),
  ]);
}
