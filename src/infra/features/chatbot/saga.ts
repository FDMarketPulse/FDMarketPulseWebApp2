import {all, call, put, takeLatest} from "redux-saga/effects";
import * as A from "./actions";
import {camelizeKeys} from "humps";
import {fetchChat} from "@/infra/features/chatbot/api";
import {objectKeysToSnakeCaseV2} from 'keys-converter';

export function* fetchChatGptReturn(payload:never) {
    try {

        const { data } = yield call(fetchChat,objectKeysToSnakeCaseV2(payload.payload));
        console.log(data)
        yield put(A.fetchChatGptReturn.success(camelizeKeys(data)));
    } catch (e) {
        yield put(A.fetchChatGptReturn.failure());
    }
}

export default function* () {
    yield all([
        takeLatest(A.fetchChatGptReturn.request, fetchChatGptReturn)
    ]);
}
