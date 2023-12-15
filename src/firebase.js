
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPKOmZ52P7V5JhsBH9l-WS3KjW02Og9P8",
  authDomain: "todo-app-a7ef1.firebaseapp.com",
  projectId: "todo-app-a7ef1",
  storageBucket: "todo-app-a7ef1.appspot.com",
  messagingSenderId: "212943287328",
  appId: "1:212943287328:web:de78967ba643be31af3845"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)