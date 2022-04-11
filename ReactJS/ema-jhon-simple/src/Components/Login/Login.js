import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [myError, setMyError] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }


    const handleLogInWithGoogle = () => {

    }


    const handleLogIn = (event) => {
        event.preventDefault();



        if (password.length === 0 || email.length === 0) {
            setMyError('Please Enter email and password properly')
            return;
        }
        if (error) {
            setMyError(error?.message);
            return;
        }

        signInWithEmailAndPassword(email, password);
        console.log("LogIn successful");
    }

    return (
        <div className='form-container'>
            <div className='form-info'>
                < h1 className='form-title'>Login </h1>


                <form onSubmit={handleLogIn}>
                    <div className="input-group">
                        <label htmlFor='email' >Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password' >Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                    </div>

                    <small style={{ color: 'red' }}>{myError}</small>

                    <small style={{ color: "green" }}>
                        {loading ? "Loading.." : ""}
                    </small>

                    <input className='form-submit' type="submit" value='Login' />
                </form>

                <p>
                    New to Ema-John?
                    <Link className='link' to='/signup'>Create new account</Link>

                </p>
                <div className='or'>
                    <hr />
                    OR
                    <hr />

                </div>

                <button onClick={handleLogInWithGoogle}>
                    <img src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg" alt="" />
                    <span>Continue with Google</span>
                </button>



            </div>



        </div>
    );
};

export default Login;