import firebase from "firebase/compat";

export type Store = {
  status: {
    userSignIn : LoadingState
    authState: LoadingState
    userSignUp: LoadingState
  };
  userSignIn: EmailSignIn
  authState: AuthState
  userSignUp:EmailSignUp
};

export type LoadingState = "REQUEST" | "SUCCESS" | "FAILURE";

export type EmailSignIn = {
  email:string
  password:string
}

export type AuthState =  {
  user: firebase.User | null;
  error: Error | null;
}

export type EmailSignUp = {
  email:string
  password:string
  displayName:string
}