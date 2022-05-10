import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialMediaLogin from '../SocialMediaLogin/SocialMediaLogin';


const SignUp = () => {

    let errordiv;
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile] = useUpdateProfile(auth);


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


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        // if (error) {
        //     return;
        // }

        let name = e.target.elements.name?.value;
        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
    };


    const handleGoToForgetPassword = () => {
        navigate('/forget-password');
    }


    const handleGoToSingIn = () => {
        navigate('/login')
    }







    return (
        <div className='py-20 flex bg-gray-bg1'>

            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Create an account
                </h1>

                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='name'
                            placeholder='Your Name'
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            placeholder='Your Email'
                            required
                        />
                    </div>


                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            required
                        />
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


                    <div>
                        <p>{errordiv}</p>
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <input className='text-white bg-blue-700 px-5 py-1 font-bold text-2xl rounded-lg active:text-yellow-500' type="submit" value="SignUp" />
                    </div>


                    <div className='flex justify-center items-center mt-6'>
                        <small>Do you have account? <small onClick={handleGoToSingIn} className='ml-2 text-lg text-blue-900 cursor-pointer'>Login</small></small>
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

export default SignUp;

