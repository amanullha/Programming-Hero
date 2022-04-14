import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { useState } from 'react';


import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const [open, setOpen] = useState(false);


    return (
        <nav className='text-white z-50 bg-black flex justify-between items-center md:px-5 sticky top-0'>

            <Link to='/'><div className={`${open ? 'hidden' : 'block'}`}>
                <img width={200} src="logo.png" alt="" />
            </div></Link>

            <div onClick={() => setOpen(open ^ 1)} className={`md:hidden cursor-pointer   ${open ? "w-full" : ""} `}>
                {open ? <XIcon className={` ${open ? "ml-auto py-4" : ""}`} width={40} /> : <MenuIcon width={40} />}

            </div>

            <ul className={`z-40 ${open ? "w-full" : ""} bg-black absolute md:static flex flex-col sm:flex-col md:flex-row duration-500 ease-in ${open ? 'top-12' : 'top-[-220px]'}  `}>

                <Link className={`${open ? "w-full" : " "} mx-2 my-1 hover:bg-white hover:text-black`} to="/home">HOME</Link>

                <Link className={`${open ? "w-full" : " "} mx-2 my-1 hover:bg-white hover:text-black`} to="/services">SERVICES</Link>

                <Link className={`${open ? "w-full" : " "} mx-2 my-1 hover:bg-white hover:text-black`} to="/experts">EXPERTS</Link>

                <Link className={`${open ? "w-full" : " "} mx-2 my-1 hover:bg-white hover:text-black`} to="/about">ABOUT</Link>

                <Link className={`${open ? "w-full" : " "} mx-2 my-1 hover:bg-white hover:text-black`} to="/login">LOGIN</Link>

            </ul>



        </nav >
    );
};

export default Header;