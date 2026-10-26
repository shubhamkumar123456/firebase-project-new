
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//configuration of your Firebase project.
// Think of firebaseConfig as an address card for your Firebase project. It tells the Firebase SDK which project your React application should connect to.
const firebaseConfig = {
  apiKey: "AIzaSyChs7QUmza6zLyZ_mktnNiw56m0b61gDDY",
  authDomain: "react-ecom-fe06c.firebaseapp.com",
  projectId: "react-ecom-fe06c",
  storageBucket: "react-ecom-fe06c.firebasestorage.app",
  messagingSenderId: "463187733093",
  appId: "1:463187733093:web:a60b25eb01cc59fca0f48c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

// getAuth() gets the Firebase Authentication service.
// app tells Firebase which initialized project to use.
// auth stores the Authentication instance.