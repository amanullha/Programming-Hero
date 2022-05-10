// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    // authDomain: process.env.REACT_APP_authDomain,
    // projectId: process.env.REACT_APP_projectId,
    // storageBucket: process.env.REACT_APP_storageBucket,
    // messagingSenderId: process.env.REACT_APP_messagingSenderId,
    // appId: process.env.REACT_APP_appId




    apiKey: "AIzaSyBDY-j9OrUBDOE-D3rc5S8GCKQdaWFN7Qw",
    authDomain: "careex-1161d.firebaseapp.com",
    projectId: "careex-1161d",
    storageBucket: "careex-1161d.appspot.com",
    messagingSenderId: "85250419051",
    appId: "1:85250419051:web:608f12c70efcde73c6842e"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;