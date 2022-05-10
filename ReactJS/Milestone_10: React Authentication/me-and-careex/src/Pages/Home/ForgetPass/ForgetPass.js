import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';



const ForgetPass = () => {

    let errordiv;

    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth);

    if (sending) {
        return <Loading></Loading>
    }

    if (error) {
        errordiv = <p className='text-red'>{error.message}</p>
    }

    const handleFormSubmit = async (e) => {

        e.preventDefault();

        let email = e.target.elements.email?.value;
        await sendPasswordResetEmail(email);

        toast('Reset Link Send');
    }





    return (
        <div className='my-20'>

            <div className='w-3/4 sm:2/4 mx-auto'>
                <form onSubmit={handleFormSubmit}>


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
                        <p>{errordiv}</p>
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <input className='text-white bg-blue-700 px-5 py-1 font-bold text-2xl rounded-lg active:text-yellow-500' type="submit" value="Reset password" />
                    </div>





                </form>
            </div>



            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ForgetPass;