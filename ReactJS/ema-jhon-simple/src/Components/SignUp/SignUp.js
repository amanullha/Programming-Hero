import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('  ');



    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }



    const handleSignUpWithGoogle = () => {


    }
    const handleCreateUser = (event) => {
        event.preventDefault()

        if (password !== confirmPassword) setError('Both password are not same!')


    }

    return (
        <div className='form-container'>
            <div className='form-info'>
                < h1 className='form-title'>Sign Up </h1>


                <form onSubmit={handleCreateUser} >
                    <div className="input-group">
                        <label htmlFor='name' >Name</label>
                        <input onChange={handleNameChange} type="text" name="name" id="" placeholder='Enter your name' required />
                    </div>

                    <div onChange={handleEmailChange} className="input-group">
                        <label htmlFor='email' >Email</label>
                        <input type="email" name="email" id="" placeholder='Enter your email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password' >Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder='Enter your password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='password' >Confirm Password</label>
                        <input onChange={handleConfirmPasswordChange} type="password" name="password" id="" placeholder='Confirm password' required />
                    </div>

                    <p style={{ color: 'red' }}>{error}</p>

                    <input className='form-submit' type="submit" value='Login' />
                </form>

                <p>
                    Do you have an account?
                    <Link className='link' to='/login'>Login</Link>

                </p>
                <div className='or'>
                    <hr />
                    OR
                    <hr />

                </div>

                <button onClick={handleSignUpWithGoogle}>
                    <img src="https://img.favpng.com/7/1/24/google-logo-google-search-icon-png-favpng-DLXaPGArrFH6yJjYE8USnMuvX_t.jpg" alt="" />
                    <span>Continue with Google</span>
                </button>



            </div>



        </div>
    );
};

export default SignUp;