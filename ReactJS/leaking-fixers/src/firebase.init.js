// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAehCtqny65tEiLrCOJkVOTIMT8Yp2QBZ0",
    authDomain: "leaking-fixers.firebaseapp.com",
    projectId: "leaking-fixers",
    storageBucket: "leaking-fixers.appspot.com",
    messagingSenderId: "157494706897",
    appId: "1:157494706897:web:2b20a2327e49cc7e517bf0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;