// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY53Yz_T4QD7Bhidmv4ph2NCffa5dFGpY",
  authDomain: "portfolio-website-c88f7.firebaseapp.com",
  projectId: "portfolio-website-c88f7",
  storageBucket: "portfolio-website-c88f7.firebasestorage.app",
  messagingSenderId: "800196002925",
  appId: "1:800196002925:web:5e30e65faaf1881574eb64",
  measurementId: "G-WTX89GCFLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

