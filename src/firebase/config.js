// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr8UIBq_aFRg7ljN8tlXHdyZCro_rfhzk",
  authDomain: "react-curso-57f64.firebaseapp.com",
  projectId: "react-curso-57f64",
  storageBucket: "react-curso-57f64.appspot.com",
  messagingSenderId: "716098365022",
  appId: "1:716098365022:web:1d34e216095b65037df6cf"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );