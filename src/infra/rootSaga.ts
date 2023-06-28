import { all, call } from "redux-saga/effects";
import { DashSaga } from "@/infra/features/dashboard";

export default function* () {
  yield all([call(DashSaga)]);
}
