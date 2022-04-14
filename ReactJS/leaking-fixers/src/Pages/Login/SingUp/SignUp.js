import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {

    const [errors, setErrors] = useState("");

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const nameRefRegister = useRef("");
    const emailRefRegister = useRef("");
    const passwordRefRegister = useRef("");

    const navigate = useNavigate();
    const handleToLogin = () => {
        navigate('/login');
    }

    if (user) {
        navigate('/home')
    }

    const handleRegisterSubmit = event => {
        event.preventDefault();

        const name = nameRefRegister.current.value;
        const email = emailRefRegister.current.value;
        const password = passwordRefRegister.current.value;


        if (error) {
            setErrors(error.message);
            return;
        }

        console.log(name, "  ", email, "  ", password);

        createUserWithEmailAndPassword(email, password);
        setErrors("Registered successfully!");
    }





    return (
        <div>
            <section class="register-section ">

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
                            id="exampleFormControlInput2"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* <!-- Email input --> */}
                    <div class="mb-6">
                        <input
                            name='email'
                            ref={emailRefRegister}
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
                            name='password'
                            ref={passwordRefRegister}
                            type="password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <small>{errors}</small>
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
                        <a href="#!" class="text-gray-800">Forgot password?</a>
                    </div>

                    <div class="text-center lg:text-left">




                        <input class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" type="submit" value="REGISTER" />

                        <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                            Do you have an account?
                            <a onClick={handleToLogin}
                                href="#!"
                                class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                            >Login</a
                            >
                        </p>

                    </div>





                </form>

            </section>
        </div>
    );
};

export default SignUp;