import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';


const SignUp = () => {

    // const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [myError, setMyError] = useState('  ');



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    if (user) {
        navigate('/shop')

    }

    const [sendEmailVerification, sending, errorr] = useSendEmailVerification(
        auth
    );


    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

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



        if (password !== confirmPassword) {
            setMyError('Both password are not same!')
            return;
        }
        if (password.length < 5) {
            setMyError('Password must be 5 characters or longer')
            return;
        }
        if (error) {
            setMyError(error);
            return;
        }


        console.log("email: ", email, "  password : ", password);

        createUserWithEmailAndPassword(email, password);
        sendEmailVerification();
        console.log("Email verification send");

    }

    return (
        <div className='form-container'>
            <div className='form-info'>
                < h1 className='form-title'>Sign Up </h1>


                <form onSubmit={handleCreateUser} >


                    {/* <div className="input-group">
                        <label htmlFor='name' >Name</label>
                        <input onChange={handleNameChange} type="name" name="name" id="" placeholder='Enter your name' required />
                    </div> */}

                    <div className="input-group">
                        <label htmlFor='email' >Email</label>
                        <input onChange={handleEmailChange} type="email" name="email" id="" placeholder='Enter your email' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='password' >Password</label>
                        <input onChange={handlePasswordChange} type="password" name="password" id="" placeholder='Enter your password' required />
                    </div>

                    <div className="input-group">
                        <label htmlFor='password' >Confirm Password</label>
                        <input onChange={handleConfirmPasswordChange} type="password" name="password" id="" placeholder='Confirm password' required />
                    </div>


                    <small style={{ color: "green" }}>
                        {loading ? "Loading.." : ""}
                    </small>

                    <p style={{ color: 'red' }}>{myError}</p>

                    <input className='form-submit' type="submit" value='Register' />


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