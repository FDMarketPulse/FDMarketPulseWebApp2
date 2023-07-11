import {all, call} from "redux-saga/effects";
import {DashSaga} from "@/infra/features/dashboard";
import {ChatSaga} from "@/infra/features/chatbot"

export default function* () {
  yield all([call(DashSaga),call(ChatSaga)]);
}
