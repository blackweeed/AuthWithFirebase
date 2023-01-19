import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4ir_5ye1kaCEnIyc7TqpmiMe_Q2trOl4",
  authDomain: "auth-tut-58545.firebaseapp.com",
  projectId: "auth-tut-58545",
  storageBucket: "auth-tut-58545.appspot.com",
  messagingSenderId: "285613156284",
  appId: "1:285613156284:web:c722422e12da54e6616db9",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const user = auth.currentUser;
export const db = getFirestore();
