// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1bmUu1q9KYUBEmbJGmeT13e_WoB1CnHU",
    authDomain: "boi-somachar.firebaseapp.com",
    projectId: "boi-somachar",
    storageBucket: "boi-somachar.appspot.com",
    messagingSenderId: "1005392188666",
    appId: "1:1005392188666:web:c5e760029b7431a11c6543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;