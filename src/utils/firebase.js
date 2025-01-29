// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI1QdRBuvAQbQUrHSnCxrjFNVMRtZfQHc",
  authDomain: "netflixgpt-17ee9.firebaseapp.com",
  projectId: "netflixgpt-17ee9",
  storageBucket: "netflixgpt-17ee9.firebasestorage.app",
  messagingSenderId: "154401343794",
  appId: "1:154401343794:web:53c2f106841ef5fc1c6f2b",
  measurementId: "G-7JTFRGMYGF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
