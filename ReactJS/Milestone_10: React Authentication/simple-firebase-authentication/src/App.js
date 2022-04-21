import './App.css';




import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



function App() {

  const [user, setUser] = useState({})


  const handleSingWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const logedInUser = result.user;
        console.log(logedInUser);
        setUser(logedInUser);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  const handleSingWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const logedInUser = result.user;
        console.log(logedInUser);
        setUser(logedInUser);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const handleSingOut = () => {

    signOut(auth)
      .then(() => {
        setUser({});

      })
      .then(err => {
        setUser({});
        console.log(err);
      })
  }



  return (
    <div className="App">
      <p>user email: {user.email}</p>
      {

        user.uid ? <button onClick={handleSingOut}>Sign Out</button> : <>
          <button onClick={handleSingWithGoogle}>Google</button>
          <button onClick={handleSingWithGithub}>Github</button>
        </>

      }
      <h2>{user.displayName}</h2>
      <p>{user.email}</p>
      <img src={user.photoURL} alt="" />

    </div>
  );
}

export default App;
