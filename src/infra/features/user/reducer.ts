import AllActions from "@/infra/rootAction";

import produce from "immer";
import { getType } from "typesafe-actions";

import * as A from "./actions";
import { defaultState } from "./defaults";

export default (state = defaultState, action: AllActions) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(A.firebaseEmailPasswordLogin.request):
        draft.status.authState = "REQUEST";
        break;
      case getType(A.firebaseEmailPasswordLogin.failure):
        draft.status.authState= "FAILURE";
        break;
      case getType(A.firebaseEmailPasswordLogin.success):
        draft.status.authState= "SUCCESS";
        draft.authState = action.payload;
        break;


      case getType(A.firebaseEmailPasswordSignUp.request):
        draft.status.userSignUp = "REQUEST";
        break;
      case getType(A.firebaseEmailPasswordSignUp.failure):
        draft.status.userSignUp= "FAILURE";
        break;
      case getType(A.firebaseEmailPasswordSignUp.success):
        draft.status.userSignUp = "SUCCESS";
        draft.authState = action.payload;
        break;


      case getType(A.firebaseSignOut.request):
        draft.status.userSignOut = "REQUEST";
        break;
      case getType(A.firebaseSignOut.failure):
        draft.status.userSignOut = "FAILURE";
        break;
      case getType(A.firebaseSignOut.success):
        draft.status.userSignOut = "SUCCESS";
        draft.authState = action.payload;
        break;


    }
  });
