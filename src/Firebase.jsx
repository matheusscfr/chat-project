// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZnGMjtlVbpgNwdaFCY0TqGiHqPFCNwyc",
  authDomain: "instantchat-5c9e7.firebaseapp.com",
  projectId: "instantchat-5c9e7",
  storageBucket: "instantchat-5c9e7.appspot.com",
  messagingSenderId: "230526456972",
  appId: "1:230526456972:web:caac58d254f2310ef057a9",
  measurementId: "G-WWGDSPRD2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);