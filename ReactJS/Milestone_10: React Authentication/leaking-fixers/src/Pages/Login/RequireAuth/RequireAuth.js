import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);

    if (loading) {
        return <Loading></Loading>
    }



    if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

    if (!user.emailVerified) {
        return <div className='mx-auto my-20 flex flex-col gap-5 items-center justify-center  '>

            <h1 className='text-red-700 font-bold tracking-wider md:text-3xl'>Please verify your email address!!</h1>

            <button
                className='md:px-10 md:py-3 px-5 py-1 bg-blue-700 text-white font-bold tracking-wider rounded-lg my-2 active:bg-blue-900 active:text-yellow-500'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent verification link to your email');
                }}
            >
                Verify email sent
            </button>

            <ToastContainer></ToastContainer>

        </div>
    }
    return children;
};

export default RequireAuth;



