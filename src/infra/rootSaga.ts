import {all, call} from "redux-saga/effects";
import {DashSaga} from "@/infra/features/dashboard";
import {ChatSaga} from "@/infra/features/chatbot"
import { UserSaga } from "@/infra/features/user";

export default function* () {
  yield all([call(DashSaga),call(ChatSaga),call(UserSaga)]);
}
