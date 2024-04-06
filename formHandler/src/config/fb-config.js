// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5aX6GTaXnI1O-HXgg7jypnXp69ygLxrc",
  authDomain: "codegirls-r1.firebaseapp.com",
  projectId: "codegirls-r1",
  storageBucket: "codegirls-r1.appspot.com",
  messagingSenderId: "948314275641",
  appId: "1:948314275641:web:5d28d72a5da94baddff2e8",
  measurementId: "G-JMLJT5QN6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth}