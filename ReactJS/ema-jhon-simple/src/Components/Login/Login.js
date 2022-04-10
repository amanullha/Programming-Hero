import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');




    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }





    const handleLogIn = () => {

    }

    return (
        <div className='form-container'>
            <div className='form-info'>
                < h1 className='form-title'>Login </h1>


                <form>
                    <div className="input-group">
                        <label htmlFor='email' >Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password' >Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="" required />
                    </div>
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

                <button onClick={handleLogIn}>
                    <img src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg" alt="" />
                    <span>Continue with Google</span>
                </button>



            </div>



        </div>
    );
};

export default Login;