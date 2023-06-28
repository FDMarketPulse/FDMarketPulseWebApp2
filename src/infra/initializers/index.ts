import { all, takeLatest } from "redux-saga/effects";
import { Action } from "redux";

export const initAction: Action = { type: "__APP_INIT__" };

export function* initSaga() {
  yield takeLatest(initAction.type, initialization);
}

function* initialization() {
  yield all([]);
}
