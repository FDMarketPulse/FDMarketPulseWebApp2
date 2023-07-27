import * as T from "./types";

export const defaultState: T.Store = {
  status: {
    userSignIn:"SUCCESS",
    authState:"SUCCESS",
    userSignUp:"SUCCESS",
    userSingOut:"SUCCESS"
  },
  userSignIn:{
    email:"",
    password:""
  },
  authState: {
    user:null,
    error:null
  },
  userSignUp:{
    email:"",
    password:"",
    displayName:""
  }
};
