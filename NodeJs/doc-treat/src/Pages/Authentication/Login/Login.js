import React from 'react';
import Social from '../Social/Social';
import { useForm } from "react-hook-form";
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import MyLoading from '../../Shared/MyLoading/MyLoading';
import { useNavigate } from 'react-router-dom';



const Login = () => {

    let errorMessage;
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();


    if (loading) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <MyLoading />
        </div>
    }

    if (error) {
        errorMessage = <span className="label-text-alt text-red-500 ">{error?.message}</span>
    }

    if (user) {
        console.log(user);
    }



    const onSubmit = data => {
        console.log(data);

        const email = data.email;
        const password = data.password;

        signInWithEmailAndPassword(email, password);
    }


    const goToSignUp = () => {
        navigate('/sign-up');
    }


    return (
        <div className='flex justify-center items-center  h-screen'>

            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body flex flex-col justify-center items-center">

                    <h2 className=" tex-center text-3xl font-bold card-title">Login</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {
                                ...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is required'
                                    },
                                    pattern: {
                                        value: /[A-Za-z]{3}/,
                                        message: 'Provide a valid email'
                                    }
                                })
                                }

                            />

                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>

                        </div>
                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                placeholder="Your Password"
                                className="input input-bordered w-full max-w-xs"
                                {
                                ...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer!'
                                    }
                                })
                                }

                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>

                        </div>

                        {errorMessage}

                        <input className='btn w-full max-w-xs text-white tracking-wider' type="submit" value="LOGIN" />


                    </form>

                    <div>
                        <span className='text-xs'>New to DocTreat? </span>
                        <span onClick={goToSignUp} className='text-sm ml-2 cursor-pointer text-secondary active:font-bold'> Create new account </span>
                    </div>


                    <div className="divider">OR</div>
                    <Social />
                </div>



            </div>

        </div>
    );
};

export default Login;