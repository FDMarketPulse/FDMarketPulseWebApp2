// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAUspsBKntjk9vRRNwiDgS_FjR79ua5fmE",
//   authDomain: "fd-market-pulse.firebaseapp.com",
//   projectId: "fd-market-pulse",
//   storageBucket: "fd-market-pulse.appspot.com",
//   messagingSenderId: "587504324970",
//   appId: "1:587504324970:web:79992feabd0d7a62bad513",
// };

// number 2 backup
const firebaseConfig = {
  apiKey: "AIzaSyBUgcqvjaADAwX1o_2-b2pXz-XYzE8zV8Y",
  authDomain: "fd-market-pulse-2.firebaseapp.com",
  projectId: "fd-market-pulse-2",
  storageBucket: "fd-market-pulse-2.appspot.com",
  messagingSenderId: "209248016280",
  appId: "1:209248016280:web:dbb2c29fcb22af0c8dbded",
};
// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const storage = getStorage(firebase);
export const auth = getAuth(firebase);
