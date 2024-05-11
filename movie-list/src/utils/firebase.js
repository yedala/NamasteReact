// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN1cMOopbsT0m9Bre-Hyd0azGXzeks218",
  authDomain: "movielist-e9960.firebaseapp.com",
  projectId: "movielist-e9960",
  storageBucket: "movielist-e9960.appspot.com",
  messagingSenderId: "944751679084",
  appId: "1:944751679084:web:37bb51050faa1d60f5aa49",
  measurementId: "G-MZ9B69ZLLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth();