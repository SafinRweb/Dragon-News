// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_c17j04AA6BrTkkTc_vQ74XgKRZfPxQ",
  authDomain: "dragon-news-afb74.firebaseapp.com",
  projectId: "dragon-news-afb74",
  storageBucket: "dragon-news-afb74.firebasestorage.app",
  messagingSenderId: "97430367803",
  appId: "1:97430367803:web:b075297b115fde73ea761e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;