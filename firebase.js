import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxfqobazw5lBf5GdUWOjCuPYz0KLZ5XcE",
  authDomain: "wildfires-5aa96.firebaseapp.com",
  projectId: "wildfires-5aa96",
  storageBucket: "wildfires-5aa96.appspot.com",
  messagingSenderId: "832366351480",
  appId: "1:832366351480:web:20cfdb0c7de754186f498d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);