// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsy65Agwuvedz6Z01VFwvauUde9bmA0dI",
  authDomain: "yuiogano.firebaseapp.com",
  projectId: "yuiogano",
  storageBucket: "yuiogano.appspot.com",
  messagingSenderId: "571811951735",
  appId: "1:571811951735:web:7989bec7e7789fc4e1c272",
  measurementId: "G-609WLNSG5K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);