import React, { useRef, useState } from 'react';
import { useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {

    const [isReset, setIsReset] = useState(false);


    let errordiv;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);



    if (error) {
        errordiv = <p className='text-sm text-red-700'>{error?.message}</p>;
    }
    else {
        errordiv = "";
    }

    const emailRefLogin = useRef("");
    const passwordRefLogin = useRef("");

    const resetEmailRef = useRef("");


    const navigate = useNavigate();

    const handleToRegister = () => {
        navigate('/register');
    }


    // redirect to last page after login
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (user) {
        //navigate(from, { replace: true });
    }


    const handleLoginSubmit = async event => {
        event.preventDefault();

        const email = emailRefLogin.current.value;
        const password = passwordRefLogin.current.value;

        console.log(email, "  ", password);

        await signInWithEmailAndPassword(email, password)

        errordiv = < p className='text-sm text-green-700' > Signed in successfully</p >;

        const { data } = await axios.post('http://localhost:5000/login', { email });

        localStorage.setItem('accessToken', data.accessToken);

        navigate(from, { replace: true });




        //console.log(data);


    }




    const handleForgerPassword = () => {
        setIsReset(isReset ^ 1);
    }

    const handleResetPassword = async () => {

        const email = resetEmailRef.current.value;

        await sendPasswordResetEmail(email);

        // toast('We have sent an Email to your account . open and change your password please');
        toast('Reset Link Send');
        resetEmailRef.current.value = "";
        setIsReset(isReset ^ 1);

    }


    if (loading || sending) {
        <Loading></Loading>
    }

    return (
        <div>
            <section class="login-section ">
                {
                    isReset ?

                        <form onSubmit={handleResetPassword} className='w-10/12 sm:w-10/12 md:w-6/12 lg:w-4/12 xl:w-4/12 mx-auto'>

                            <h2 className='text-2xl text-center mb-10 mt-12 text-indigo-800 font-bold tracking-widest'>Reset your password </h2>

                            <div class="mb-6">
                                <input

                                    ref={resetEmailRef}
                                    type="email"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    required
                                />
                            </div>


                            <input class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" type="submit" value="RESET" />
                        </form>

                        :

                        <form onSubmit={handleLoginSubmit} className='w-12/12 sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto'>
                            <div className='flex flex-col justify-center'>
                                <img className='mb-0  md:w-3/4 sm:w-1/4 w-1/4 mx-auto' src="logo.png" alt="" />
                                <h1 className='text-center text-2xl md:text-4xl mt-0 mb-8'>Sign in to your account </h1>
                            </div>


                            {/* <!-- Email input --> */}
                            <div class="mb-6">
                                <input
                                    ref={emailRefLogin}
                                    type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    required
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="mb-6">
                                <input
                                    ref={passwordRefLogin}
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                    required
                                />
                            </div>


                            <small>{errordiv}</small>


                            <div class="flex justify-between items-center mb-6">
                                <div class="form-group form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck2"
                                    />
                                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                    >Remember me</label
                                    >
                                </div>
                                <a onClick={handleForgerPassword} href="#!" class="text-blue-800">Forgot password?</a>
                            </div>

                            <div class="text-center lg:text-left">


                                {/* <button
                            type="button"
                            class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                        >
                            Login
                        </button> */}

                                <input class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" type="submit" value="LOGIN" />

                                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Don't have an account?
                                    <a onClick={handleToRegister}
                                        href="#!"
                                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Register</a
                                    >
                                </p>

                            </div>

                            {/* SOCIAL LOGIN  */}
                            <SocialLogin></SocialLogin>

                        </form>
                }

            </section>
            <ToastContainer />
        </div>
    );
};

export default Login;