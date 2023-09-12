import { all, call, put, takeLatest } from "redux-saga/effects";
import * as A from "./actions";

import {
  fetchChat,
  fetchChatGpt4,
  fetchDocChat,
  fetchNewSentiment,
  fetchNewSentimentTranslate,
  fetchQnAResp,
  fetchStockAnalysis,
} from "@/infra/features/chatbot/api";
import { objectKeysToSnakeCaseV2 } from "keys-converter";
import {
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytes,
} from "firebase/storage";

import { storage } from "@/infra/auth/firebase";
import { camelizeKeysMod } from "@/utils/camelizeKeys";

export function* fetchChatGptReturn(action) {
  try {
    const { data } = yield call(
      fetchChat,
      objectKeysToSnakeCaseV2(action.payload)
    );
    yield put(A.fetchChatGptReturn.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchChatGptReturn.failure());
  }
}

export function* fetchChatGpt4Return(action) {
  try {
    const { data } = yield call(
      fetchChatGpt4,
      objectKeysToSnakeCaseV2(action.payload)
    );
    yield put(A.fetchChatGpt4Return.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchChatGpt4Return.failure());
  }
}

export function* fetchDocGptReturn(action) {
  try {
    const { data } = yield call(
      fetchDocChat,
      objectKeysToSnakeCaseV2(action.payload)
    );
    yield put(A.fetchDocGptReturn.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchDocGptReturn.failure());
  }
}

export function* fetchNewsSentiment(action) {
  try {
    const { data } = yield call(
      fetchNewSentiment,
      objectKeysToSnakeCaseV2(action.payload)
    );
    yield put(A.fetchNewsSentiment.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchNewsSentiment.failure());
  }
}

export function* fetchTransNewsSentiment(action) {
  try {
    const { data } = yield call(
      fetchNewSentimentTranslate,
      objectKeysToSnakeCaseV2(action.payload)
    );

    yield put(A.fetchTranNewsSentiment.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchTranNewsSentiment.failure());
  }
}

export function* fetchQnA(action) {
  try {
    console.log("fetchQnA");
    const { data } = yield call(fetchQnAResp, action.payload);

    yield put(A.fetchQnA.success(camelizeKeysMod(data)));
  } catch (e) {
    yield put(A.fetchQnA.failure());
  }
}
export function* fileUploadToFireBase(action) {
  try {
    const { file, folderName } = action.payload; // extract file and folder name from the action payload
    const fileRef = ref(storage, `/${folderName}/${file.name}`);
    yield call(uploadBytes, fileRef, file);
    const fileUrl = yield call(getDownloadURL, fileRef);
    yield put(A.uploadDocFirebase.success(fileUrl));
    const listRef = ref(storage, `/${folderName}`);
    const files = yield call(listAll, listRef);
    const fileUrls = yield all(
      files.items.map((item) => call(getDownloadURL, item))
    );
    yield put(
      A.fetchFileList.success(
        files.items.map((item, index) => ({
          name: item.name,
          url: fileUrls[index],
        }))
      )
    );
  } catch (e) {
    yield put(A.uploadDocFirebase.failure());
  }
}

export function* fetchStockAnalysisSaga(action) {
  try {
    const { data } = yield call(
      fetchStockAnalysis,
      objectKeysToSnakeCaseV2(action.payload)
    );
    console.log(data);
    yield put(A.fetchStockAnalysis.success(camelizeKeysMod(data)));
  } catch (e) {
    console.log(e);
    yield put(A.fetchStockAnalysis.failure(e));
  }
}
export function* fetchFilesFromFirebase(action) {
  try {
    const { folder } = action.payload;
    const listRef = ref(storage, `/${folder}`);
    const files = yield call(listAll, listRef);
    console.log(listRef);
    console.log(files);

    const fileDetails = yield all(
      files.items.map(function* (item) {
        const url = yield call(getDownloadURL, item);
        const metadata = yield call(getMetadata, item); // get metadata for the item
        return {
          name: item.name,
          url: url,
          size: metadata.size, // access the size from the metadata
        };
      })
    );

    yield put(A.fetchFileList.success(fileDetails));
  } catch (e) {
    yield put(A.fetchFileList.failure(e));
  }
}

export default function* () {
  yield all([
    takeLatest(A.fetchChatGptReturn.request, fetchChatGptReturn),
    takeLatest(A.fetchChatGpt4Return.request, fetchChatGpt4Return),
    takeLatest(A.fetchNewsSentiment.request, fetchNewsSentiment),
    takeLatest(A.fetchTranNewsSentiment.request, fetchTransNewsSentiment),
    takeLatest(A.fetchQnA.request, fetchQnA),
    takeLatest(A.uploadDocFirebase.request, fileUploadToFireBase),
    takeLatest(A.fetchFileList.request, fetchFilesFromFirebase),
    takeLatest(A.fetchDocGptReturn.request, fetchDocGptReturn),
    takeLatest(A.fetchStockAnalysis.request, fetchStockAnalysisSaga),
  ]);
}
