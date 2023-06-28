import {Action} from "redux"
import {RootState} from "@/infra/rootState";
import {all, delay, select, put} from "redux-saga/effects"

export function* execute(actions: Action[], completeFn?: (state: RootState) => boolean) {
  yield all(actions.map(a => put(a)));

  if (completeFn) {
    let done = false;
    do {
      done = yield select(completeFn);
      yield delay(500);
    } while (!done);
  }

}