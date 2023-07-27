import { all, call, put, takeLatest } from "redux-saga/effects";
import * as A from "./actions";
import { auth } from "@/infra/auth/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export function* firebaseUserLoginEmailPassword(action) {
  try {
    console.log("start login");
    const { email, password } = action.payload;
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );
    console.log(userCredential);
    yield put(
      A.firebaseEmailPasswordLogin.success({
        user: userCredential.user,
        error: null,
      })
    );
  } catch (e) {
    yield put(A.firebaseEmailPasswordLogin.failure());
  }
}

export function* firebaseUserLogout() {
  try {
    console.log("start logout");
    const userCredential = yield call(signOut, auth);
    console.log(userCredential);
    yield put(
      A.firebaseSignOut.success({
        user: null,
        error: null,
      })
    );
  } catch (e) {
    yield put(A.firebaseSignOut.failure());
  }
}

export function* firebaseUserSignUpEmailPassword(action) {
  try {
    console.log("start signup");
    const { email, password, displayName } = action.payload;
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    console.log(userCredential);
    yield call(updateProfile, userCredential.user, { displayName });

    yield put(
      A.firebaseEmailPasswordSignUp.success({
        user: userCredential.user,
        error: null,
      })
    );
  } catch (e) {
    yield put(A.firebaseEmailPasswordSignUp.failure());
  }
}


export default function* () {
  yield all([
    takeLatest(
      A.firebaseEmailPasswordLogin.request,
      firebaseUserLoginEmailPassword
    ),
    takeLatest(
      A.firebaseEmailPasswordSignUp.request,
      firebaseUserSignUpEmailPassword
    ),
    takeLatest(
        A.firebaseSignOut.request,
        firebaseUserLogout
    )
  ]);
}
