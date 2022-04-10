import React from 'react';
import '../Register/Register.css'
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <h1>Please login</h1>
            <form>

                <input type="email" name="" id="" placeholder='Your email' />
                <input type="password" name="" id="" placeholder='Your password' />
                <input type="submit" value="Login" />
            </form>

            <div className='or'>
                <hr width="90%" />
                <p>OR</p>
                <hr width="90%" />
            </div>
            <button onClick={handleGoogleSignIn}>
                <img src="google.png" alt="" />
            </button>
        </div>
    );
};

export default Login;