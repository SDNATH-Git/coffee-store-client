// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3nT5pKpl7oDHnYcB9jw0cA3S7BTj_QKI",
  authDomain: "coffee-store-app-a0cec.firebaseapp.com",
  projectId: "coffee-store-app-a0cec",
  storageBucket: "coffee-store-app-a0cec.firebasestorage.app",
  messagingSenderId: "175690838151",
  appId: "1:175690838151:web:b11a992c5220553dca4822"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);