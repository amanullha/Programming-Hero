import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import MyLoading from '../../Shared/MyLoading/MyLoading';
import { useLocation, useNavigate } from 'react-router-dom';


const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    let location = useLocation();


    if (loading) {
        // return <button class="btn loading">loading</button>
        return <MyLoading />
    }

    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });

    }





    return (
        <div className='flex flex-col justify-center items-center gap-4'>
            <button
                onClick={() => signInWithGoogle()}
                className='btn btn-outline'
            >Continue with Google</button>

            {error ? <span class="label-text-alt text-red-500">{error.message}</span> : ""}


        </div>
    );
};

export default Social;