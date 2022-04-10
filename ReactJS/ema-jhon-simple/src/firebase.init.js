// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArmmGCNOIQcXaBwrOUjKl10tmbHiif-GM",
    authDomain: "ema-jhon-590c8.firebaseapp.com",
    projectId: "ema-jhon-590c8",
    storageBucket: "ema-jhon-590c8.appspot.com",
    messagingSenderId: "1064350255070",
    appId: "1:1064350255070:web:efd0c8cc6482ba2c75ff4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;