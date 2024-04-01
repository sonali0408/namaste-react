// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl6p7UfbU_NSvRWT0GSfom4BEGdHZm1f4",
  authDomain: "my-swiggy-clone.firebaseapp.com",
  projectId: "my-swiggy-clone",
  storageBucket: "my-swiggy-clone.appspot.com",
  messagingSenderId: "391972279677",
  appId: "1:391972279677:web:abb1b3e8d7af3fe046e814",
  measurementId: "G-H8TQWRBJP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};