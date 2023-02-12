// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVFj02awlYV1-I93Q5p34K6-IMHIDKxek",
  authDomain: "notes-app-a3a2b.firebaseapp.com",
  projectId: "notes-app-a3a2b",
  storageBucket: "notes-app-a3a2b.appspot.com",
  messagingSenderId: "1051861129949",
  appId: "1:1051861129949:web:9ca4a512b8eeaf91ed5934"
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );