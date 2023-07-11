import {DashReducer} from "@/infra/features/dashboard";

import {combineReducers} from "redux";
import {RootState} from "./rootState";
import {ChatReducer} from "@/infra/features/chatbot";
// import { firestoreReducer } from "redux-firestore";

export const rootReducer = combineReducers<RootState>({
  dashboard: DashReducer,
  chatbot:ChatReducer
});
