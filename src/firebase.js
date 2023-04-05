// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyDRQhIWPVluVlA4rbCgNDmB0WFrN7tLrEY",
    authDomain: "chatsys-54518.firebaseapp.com",
    projectId: "chatsys-54518",
    storageBucket: "chatsys-54518.appspot.com",
    messagingSenderId: "345506326849",
    appId: "1:345506326849:web:debfcfe7e34c092e8519c0",
    measurementId: "G-S96Q72BWMT"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
// const analytics = getAnalytics(app);

