# CodeRed - Team CodeBlooded
Vanakkam!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo5rCPRJqIfLzH0kD0Uv6eb7e6y8-S1e8",
  authDomain: "codered-8bb26.firebaseapp.com",
  projectId: "codered-8bb26",
  storageBucket: "codered-8bb26.firebasestorage.app",
  messagingSenderId: "1010372752671",
  appId: "1:1010372752671:web:7e1667a37dcf12a2f9ac2a",
  measurementId: "G-NQ2P3VFKW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);