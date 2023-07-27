import { all, call, put, takeLatest } from "redux-saga/effects";
import * as A from "./actions";
import { auth } from "@/infra/auth/firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,updateProfile} from "firebase/auth";

export function* firebaseUserLoginEmailPassword(action) {
  try {
    console.log("start login")
    const { email, password } = action.payload;
    const userCredential = yield call(signInWithEmailAndPassword, auth, email, password);

    yield put(A.firebaseEmailPasswordLogin.success(userCredential.user));
  } catch (e) {
    yield put(A.firebaseEmailPasswordLogin.failure());
  }
}

export function* firebaseUserSignUpEmailPassword(action) {
  try {
    console.log("start signup")
    const { email, password, displayName } = action.payload;
    const userCredential = yield call(createUserWithEmailAndPassword, auth, email, password);
    yield call(updateProfile, userCredential.user, { displayName });

    yield put(A.firebaseEmailPasswordSignUp.success(userCredential.user));
  } catch (e) {
    yield put(A.firebaseEmailPasswordSignUp.failure());
  }
}


export default function* () {
  yield all([
    takeLatest(A.firebaseEmailPasswordLogin.request,firebaseUserLoginEmailPassword),
    takeLatest(A.firebaseEmailPasswordSignUp.request,firebaseUserSignUpEmailPassword)
  ]);
}
