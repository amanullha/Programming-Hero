import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';


import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);


    const [open, setOpen] = useState(false);

    const handleSingOut = () => {
        signOut(auth);
    }


    // animated under line on hover 



    return (
        <nav className='text-white z-50 bg-black flex justify-between items-center md:px-5 sticky top-0'>

            <Link to='/'><div className={`${open ? 'hidden' : 'block'}`}>
                <img width={200} src="logo.png" alt="" />
            </div></Link>

            <div onClick={() => setOpen(open ^ 1)} className={`md:hidden cursor-pointer   ${open ? "w-full" : ""} `}>
                {open ? <XIcon className={` ${open ? "ml-auto py-4" : ""}`} width={40} /> : <MenuIcon width={40} />}

            </div>

            <ul className={`z-40 ${open ? "w-full" : ""} bg-black absolute md:static flex flex-col sm:flex-col md:flex-row duration-500 ease-in ${open ? 'top-12' : 'top-[-220px]'}  `}>

                <CustomLink className={`${open ? "w-full" : " "} mx-2 my-1 hover:underline `} to="/home">HOME</CustomLink>

                <CustomLink className={`${open ? "w-full" : " "} mx-2 my-1 hover:underline `} to="/services">SERVICES</CustomLink>

                <CustomLink className={`${open ? "w-full" : " "} mx-2 my-1 hover:underline  `} to="/experts">EXPERTS</CustomLink>

                <CustomLink className={`${open ? "w-full" : " "} mx-2 my-1 hover:underline `} to="/about">ABOUT</CustomLink>

                {
                    user ?
                        (<CustomLink onClick={handleSingOut} className={`${open ? "w-full" : " "} mx-2 my-1 hover:underline `} to="">LOGOUT</CustomLink>
                        ) : (<CustomLink className={`${open ? "w-full" : " "} mx-2 my-1 hover:underline `} to="/login">LOGIN</CustomLink >)

                }

            </ul>



        </nav >
    );
};

export default Header;