import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';


const Login = () => {

    let errordiv;

    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    // redirect to last page after login
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    console.log("from : ", from);
    if (user) {
        navigate(from, { replace: true });
    }



    if (error) {
        errordiv = <p className='text-red'>{error.message}</p>
    }
    else {
        errordiv = "";
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // if (error) {
        //     return;
        // }

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
        signInWithEmailAndPassword(email, password);
    };



    const handleGoToForgetPassword = () => {

        navigate('/forget-password');
    }


    const handleGoToSingUp = () => {
        navigate('/signup')
    }


    return (
        <div className='py-20 flex bg-gray-bg1'>

            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                        />
                    </div>

                    <div>
                        <p>{errordiv}</p>
                    </div>



                    <div className='flex items-center justify-between'>

                        <div>
                            <input className='mr-2 text-2xl' type="checkbox" name="check" id="" />
                            <label htmlFor="check">Remember me!</label>
                        </div>
                        <div className='text-blue-900'>
                            <button onClick={handleGoToForgetPassword}>Forget password ?</button>
                        </div>


                    </div>



                    <div className='flex justify-center items-center mt-6'>
                        <input className='text-white bg-blue-700 px-5 py-1 font-bold text-2xl rounded-lg active:text-yellow-500' type="submit" value="Login" />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <small>You haven't an account ? <small onClick={handleGoToSingUp} className='ml-2 text-lg text-blue-900 cursor-pointer'>SignUp</small></small>
                    </div>


                </form>


                <div>

                    <div>
                        <div className='flex my-10 items-center gap-2'>
                            <hr style={{ width: "30%" }}></hr>
                            <h1>Continue with </h1>
                            <hr style={{ width: "30%" }}></hr>
                        </div>
                    </div>

                    <div>
                        <SocialMediaLogin></SocialMediaLogin>
                    </div>


                </div>





            </div>




        </div>
    );
};

export default Login;

