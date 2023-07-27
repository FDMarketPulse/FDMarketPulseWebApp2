import {DashReducer} from "@/infra/features/dashboard";
import {ChatReducer} from "@/infra/features/chatbot";
import {UserReducer} from "@/infra/features/user";
// import { firestoreReducer } from "redux-firestore";


import {combineReducers} from "redux";
import {RootState} from "./rootState";

export const rootReducer = combineReducers<RootState>({
  dashboard: DashReducer,
  chatbot:ChatReducer,
  user: UserReducer
});
