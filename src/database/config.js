import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC27nniWwKiTOuTpMVDLPn44KbRmT9engo",
  authDomain: "my-cook-book-c0d49.firebaseapp.com",
  projectId: "my-cook-book-c0d49",
  storageBucket: "my-cook-book-c0d49.appspot.com",
  messagingSenderId: "851805079305",
  appId: "1:851805079305:web:a6036bc6963e22a184f5d8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
