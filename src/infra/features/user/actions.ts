import {createAsyncAction} from "typesafe-actions";

import * as T from "./types";
import * as AT from "./actionTypes"

export const firebaseEmailPasswordLogin = createAsyncAction(
  AT.FIREBASE_EMAIL_PASSWORD_LOGIN_REQUEST,
  AT.FIREBASE_EMAIL_PASSWORD_LOGIN_SUCCESS,
  AT.FIREBASE_EMAIL_PASSWORD_LOGIN_FAILURE
)<T.EmailSignIn, T.AuthState, void>();


export const firebaseEmailPasswordSignUp = createAsyncAction(
  AT.FIREBASE_EMAIL_PASSWORD_SIGNUP_REQUEST,
  AT.FIREBASE_EMAIL_PASSWORD_SIGNUP_SUCCESS,
  AT.FIREBASE_EMAIL_PASSWORD_SIGNUP_FAILURE
)<T.EmailSignUp, T.AuthState, void>();