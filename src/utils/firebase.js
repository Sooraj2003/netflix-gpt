// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1GJY2LGPaHMo4fMasfV9EhMnNuPCpCsw",
  authDomain: "netflixgpt-8b528.firebaseapp.com",
  projectId: "netflixgpt-8b528",
  storageBucket: "netflixgpt-8b528.appspot.com",
  messagingSenderId: "853046942979",
  appId: "1:853046942979:web:b78592744f50932d031d36",
  measurementId: "G-25WR0HX18E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();