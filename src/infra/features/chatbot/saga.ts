import { all, call, put, takeLatest } from "redux-saga/effects";
import * as A from "./actions";
import { camelizeKeys } from "humps";
import {
  fetchChat,
  fetchNewSentiment,
  fetchNewSentimentTranslate,
  fetchQnAResp,
} from "@/infra/features/chatbot/api";
import { objectKeysToSnakeCaseV2 } from "keys-converter";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { storage } from "@/infra/auth/firebase";

export function* fetchChatGptReturn(payload: never) {
  try {
    const { data } = yield call(
      fetchChat,
      objectKeysToSnakeCaseV2(payload.payload)
    );
    yield put(A.fetchChatGptReturn.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchChatGptReturn.failure());
  }
}

export function* fetchNewsSentiment(payload: never) {
  try {
    const { data } = yield call(
      fetchNewSentiment,
      objectKeysToSnakeCaseV2(payload.payload)
    );
    yield put(A.fetchNewsSentiment.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchNewsSentiment.failure());
  }
}

export function* fetchTransNewsSentiment(payload: never) {
  try {
    const { data } = yield call(
      fetchNewSentimentTranslate,
      objectKeysToSnakeCaseV2(payload.payload)
    );
    yield put(A.fetchTranNewsSentiment.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchTranNewsSentiment.failure());
  }
}

export function* fetchQnA(payload: never) {
  try {
    console.log("fetchQnA");
    const { data } = yield call(fetchQnAResp, payload.payload);
    yield put(A.fetchQnA.success(camelizeKeys(data)));
  } catch (e) {
    yield put(A.fetchQnA.failure());
  }
}

export function* fileUploadToFireBase(action) {
  try {
    console.log("fileUpload");
    console.log(action.payload);
    const fileRef = ref(storage, `/doc_analysis/${action.payload.name}`);
    console.log(fileRef);
    yield call(uploadBytes, fileRef, action.payload);
    const fileUrl = yield call(getDownloadURL, fileRef);
    console.log(fileUrl);
    yield put(A.uploadDocFirebase.success(fileUrl));
  } catch (e) {
    console.log(e);
    yield put(A.uploadDocFirebase.failure());
  }
}
export default function* () {
  yield all([
    takeLatest(A.fetchChatGptReturn.request, fetchChatGptReturn),
    takeLatest(A.fetchNewsSentiment.request, fetchNewsSentiment),
    takeLatest(A.fetchTranNewsSentiment.request, fetchTransNewsSentiment),
    takeLatest(A.fetchQnA.request, fetchQnA),
    takeLatest(A.uploadDocFirebase.request, fileUploadToFireBase),
  ]);
}
