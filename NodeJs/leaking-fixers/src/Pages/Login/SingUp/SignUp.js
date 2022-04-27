import React, { useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';

const SignUp = () => {

    const [isReset, setIsReset] = useState(false);
    const [checked, setChecked] = useState(false);

    let errordiv;

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [updateProfile, updating, updateProfileerror] = useUpdateProfile(auth);






    if (error) {
        errordiv = <p className='text-sm text-red-700'>{error?.message}</p>;
    }
    else {
        errordiv = "";
    }


    const nameRefRegister = useRef("");
    const emailRefRegister = useRef("");
    const passwordRefRegister = useRef("");

    const resetEmailRef = useRef("");

    const navigate = useNavigate();
    const handleToLogin = () => {
        navigate('/login');
    }


    // redirect to last page after login
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });
    }

    const handleRegisterSubmit = async (event) => {

        event.preventDefault();

        const name = nameRefRegister.current.value;
        const email = emailRefRegister.current.value;
        const password = passwordRefRegister.current.value;

        console.log(name, "  ", email, "  ", password);

        await createUserWithEmailAndPassword(email, password);

        handleUpdateProfile();

        errordiv = <p className='text-sm text-green-700'>Registered successfully!</p>;

        //navigate('/home');
    }



    const handleUpdateProfile = async () => {

        const name = nameRefRegister.current.value;

        await updateProfile({ displayName: name });
        //alert('Updated profile');
    }


    const handleForgerPassword = () => {
        setIsReset(isReset ^ 1);
    }

    const handleResetPassword = async () => {

        const email = resetEmailRef.current.value;

        await sendPasswordResetEmail(email);
        alert('We have sent an Email to your account . open and change your password please');
        resetEmailRef.current.value = "";
        setIsReset(isReset ^ 1);

    }

    if (loading || sending || updating) {
        <Loading></Loading>
    }


    return (
        <div>
            <section class="register-section ">
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

                        <form onSubmit={handleRegisterSubmit} className='w-12/12 sm:w-11/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto'>
                            <div className='flex flex-col justify-center'>
                                <img className='mb-0  md:w-3/4 sm:w-1/4 w-1/4 mx-auto' src="logo.png" alt="" />
                                <h1 className='text-center text-2xl md:text-4xl mt-0 mb-8'>Register your self </h1>
                            </div>


                            {/* <!-- Name input --> */}
                            <div class="mb-6">
                                <input
                                    name='name'
                                    ref={nameRefRegister}
                                    type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput1"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>

                            {/* <!-- Email input --> */}
                            <div class="mb-6">
                                <input
                                    name='email'
                                    ref={emailRefRegister}
                                    type="email"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                    required
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="mb-6">
                                <input
                                    name='password'
                                    ref={passwordRefRegister}
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput3"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                            {/* CONDITION FOR CREATE AN ACCOUNT  */}
                            <div class="mb-6 flex items-center">
                                <input
                                    onClick={() => setChecked(checked ^ 1)}
                                    name='text'
                                    type="checkbox"
                                    id="exampleFormControlInput4"
                                    required
                                    className='ml-1 mr-3'
                                />
                                <label className={checked ? "text-green-700 " : "text-red-700"}>Accept Leaking Fixers Terms and Conditions</label>
                            </div>


                            <small>{errordiv}</small>


                            <div class="flex justify-between items-center mb-6">
                                <div class="form-group form-check">
                                    <input
                                        name='text'
                                        type="checkbox"
                                        id="exampleFormControlInput4"
                                        className='ml-1 mr-3'
                                    />

                                    <label class="form-check-label inline-block text-gray-800" for="exampleCheck2"
                                    >Remember me</label
                                    >
                                </div>
                                <a onClick={handleForgerPassword} href="#!" class="text-blue-800 hover:text-red-900">Forgot password?</a>
                            </div>

                            <div class="text-center lg:text-left">




                                <input class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" type="submit" value="REGISTER" />

                                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Do you have an account?
                                    <a onClick={handleToLogin}
                                        href="#!"
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out ml-2"
                                    >Login</a
                                    >
                                </p>

                            </div>


                            {/* Social Signup  */}
                            <SocialLogin></SocialLogin>



                        </form>
                }

            </section>

        </div>
    );
};

export default SignUp;