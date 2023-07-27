// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUspsBKntjk9vRRNwiDgS_FjR79ua5fmE",
  authDomain: "fd-market-pulse.firebaseapp.com",
  projectId: "fd-market-pulse",
  storageBucket: "fd-market-pulse.appspot.com",
  messagingSenderId: "587504324970",
  appId: "1:587504324970:web:79992feabd0d7a62bad513",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage(firebase);

export const auth = getAuth(firebase);
