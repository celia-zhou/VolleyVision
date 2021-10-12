// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4lk1ACdzgs93tnuze1BSkwX2KmvRqu8Q",
  authDomain: "volleyvision-e6c88.firebaseapp.com",
  databaseURL: "https://volleyvision-e6c88-default-rtdb.firebaseio.com",
  projectId: "volleyvision-e6c88",
  storageBucket: "volleyvision-e6c88.appspot.com",
  messagingSenderId: "810069680059",
  appId: "1:810069680059:web:ece16ae4ede793ee826e9e",
  measurementId: "G-1Z6HRYP7NT"
};


// Initialize Firebase
const fb = initializeApp(firebaseConfig);
const fba = getAnalytics(fb);