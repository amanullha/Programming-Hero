

import React from 'react';
import MyLoading from '../../Shared/MyLoading/MyLoading';
import auth from '../../../firebase.init';
import {  useSendEmailVerification } from 'react-firebase-hooks/auth';



const VerifyEmail = () => {

    let errorMessage;


    const [sendEmailVerification, sending, verifyError] = useSendEmailVerification(auth);

    if (sending) {
        return <div className='h-screen w-full flex justify-center items-center'>
            <MyLoading />
        </div>
    }

    if (verifyError) {
        errorMessage = <span className="label-text-alt text-red-500 ">{verifyError?.message}</span>
    }

    const handleVerifyEmail = async () => {
        await sendEmailVerification();
    }




    return (
        <div className='flex justify-center items-center  h-screen'>

            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body flex flex-col justify-center items-center">

                    <h2 className="text-secondary my-3 tex-center text-2xl font-bold card-title">Click to verify your email </h2>


                    <button onClick={handleVerifyEmail} className='btn w-full max-w-xs text-white tracking-wider active:text-red-500'>Verify</button>



                </div>



            </div>

        </div>
    );
};

export default VerifyEmail;