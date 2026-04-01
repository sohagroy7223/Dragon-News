// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyAdgjvgf1XDKA8Gq76z8v7_dDuiLoKaVR0",
  authDomain: "dragon-news-firebase-47f6c.firebaseapp.com",
  projectId: "dragon-news-firebase-47f6c",
  storageBucket: "dragon-news-firebase-47f6c.firebasestorage.app",
  messagingSenderId: "834304221763",
  appId: "1:834304221763:web:d1a43e0232571bc00caaf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app); // ✅ এখন ঠিক
