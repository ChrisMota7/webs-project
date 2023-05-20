// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkqON8fAvHVNBqBFAFefvSkF3KT0CKxrg",
  authDomain: "websproject-23c0c.firebaseapp.com",
  projectId: "websproject-23c0c",
  storageBucket: "websproject-23c0c.appspot.com",
  messagingSenderId: "449449682435",
  appId: "1:449449682435:web:2691bb41d7ca10108e9036"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)