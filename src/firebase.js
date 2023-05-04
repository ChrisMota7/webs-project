import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyBYGjqhuBBFxEWgKYTb0-l1hcVdebh962c",
  authDomain: "ecim-6adaa.firebaseapp.com",
  projectId: "ecim-6adaa",
  storageBucket: "ecim-6adaa.appspot.com",
  messagingSenderId: "482895858036",
  appId: "1:482895858036:web:b97473037cff107b910421"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)