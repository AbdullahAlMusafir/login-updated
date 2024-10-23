// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDj_cfptH_gWmhaQnPwRb_4GGXZFHXMt6s",
  authDomain: "fir-001-5f4f4.firebaseapp.com",
  projectId: "fir-001-5f4f4",
  storageBucket: "fir-001-5f4f4.appspot.com",
  messagingSenderId: "1049423536174",
  appId: "1:1049423536174:web:feb1d9a199e963565f7fbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app