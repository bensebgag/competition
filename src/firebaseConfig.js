import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7J4gldMr09mScoV7ck-JqLg2_-WUQGZc",
  authDomain: "competition-abef1.firebaseapp.com",
  projectId: "competition-abef1",
  storageBucket: "competition-abef1.firebasestorage.app",
  messagingSenderId: "713589380186",
  appId: "1:713589380186:web:675a9786e268264b077463",
  measurementId: "G-PTH95XGMXY",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
