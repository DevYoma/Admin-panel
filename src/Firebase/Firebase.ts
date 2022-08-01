// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "yoma-admin.firebaseapp.com",
  projectId: "yoma-admin",
  storageBucket: "yoma-admin.appspot.com",
  messagingSenderId: "495637007609",
  appId: "1:495637007609:web:9ea1b6cd98fe34a550a628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initializing auth
export const auth = getAuth();
// Initializing db
export const db = getFirestore(app);
// Initializing Storage
export const storage = getStorage(app);