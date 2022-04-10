import { useEffect, useState } from "react"

import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const GoogleProvider = new GoogleAuthProvider();
const auth = getAuth(app)


const useFirebase = () => {

    const [user, setUser] = useState({});






    const signInWithGoogle = () => {

        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                setUser(result.user)
                console.log("new user: ", result.user);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const UserSignOut = () => {

        signOut(auth)
            .then(() => {
                console.log("User Signed Out");
            })
    }

    useEffect(() => {

        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])




    return { user, setUser, signInWithGoogle, UserSignOut }
}

export default useFirebase;