import React from 'react';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import MyLoading from '../../Shared/MyLoading/MyLoading';


const Social = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (loading) {
        // return <button class="btn loading">loading</button>
        return <MyLoading />
    }

    if (user) {
        console.log(user);
    }

    // if (error) {
    //     console.log(error);
    // }


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