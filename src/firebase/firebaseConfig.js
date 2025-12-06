// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9UywwwwFQw4SQIstQtNSjEdxgEaeCzzU",
  authDomain: "credismart-f5b34.firebaseapp.com",
  projectId: "credismart-f5b34",
  storageBucket: "credismart-f5b34.firebasestorage.app",
  messagingSenderId: "995710703112",
  appId: "1:995710703112:web:5773076ab30e1daa6b63bd",
  measurementId: "G-79TCRKG3T2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);