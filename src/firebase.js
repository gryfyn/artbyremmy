// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlczpmSaYmhuGMPLcMD1bjQbYlHmPguzc",
  authDomain: "art-by-remmy.firebaseapp.com",
  projectId: "art-by-remmy",
  storageBucket: "art-by-remmy.firebasestorage.app",
  messagingSenderId: "51664568743",
  appId: "1:51664568743:web:eff0552e1bc0a80a15b682",
  measurementId: "G-GXL881YH6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);