// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvXphSsDu-J3Gt5-toCz7nGiDW4V8bwH4",
  authDomain: "calculate-464e6.firebaseapp.com",
  projectId: "calculate-464e6",
  storageBucket: "calculate-464e6.appspot.com",
  messagingSenderId: "490713948056",
  appId: "1:490713948056:web:2521e54dd443e6ae4c55ed",
  measurementId: "G-JHVEE7LMBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);

const functions = getFunctions(app);
connectFunctionsEmulator(functions, "localhost", 5001);