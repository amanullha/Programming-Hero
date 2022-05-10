import { faBars, faXmark, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Header.css'


const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    const [open, setOpen] = useState(false);

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");


    const handleLogOut = () => {
        signOut(auth);
    }
    const handleChangeOpen = () => {
        setOpen(open ^ 1);
    }

    return (
        <div className=' sticky top-0 z-50  shadow-md bg-white relative '>
            <div className='  md:hidden p-5'>

                <div className=' float-right  inline '>
                    {
                        open ?
                            <FontAwesomeIcon onClick={handleChangeOpen} icon={faXmark} />
                            :
                            <FontAwesomeIcon onClick={handleChangeOpen} icon={faBars} />
                    }
                </div>

            </div>

            <nav className='  flex items-center justify-between  w-full md:w-10/12 mx-auto relative' >

                <div className={open ? "hidden md:block" : "p-1 "}>
                    <img width={140} src="logo.png" alt="" />
                </div>

                <ul className={open ? "flex md:items-center md:flex-row md:relative md:justify-center items-center md:gap-4 flex-col absolute bg-white w-full top-5 duration-1000 ease-in-out " : "  md:flex hidden items-center gap-4  "}>
                    {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}

                    <li className={splitLocation[1] === "" ? "active" : ""}>
                        <Link to='/'>HOME</Link>
                    </li>

                    <li className={splitLocation[1] === "services" ? "active" : ""}>
                        <Link to='/services'>SERVICES</Link>
                    </li>

                    <li className={splitLocation[1] === "about" ? "active" : ""}>
                        <Link to='/about'>ABOUT</Link>
                    </li>

                    <li className={splitLocation[1] === "contacts" ? "active" : ""}>
                        <Link to="/contacts">CONTACTS</Link>
                    </li>
                    <li className={splitLocation[1] === "blogs" ? "active" : ""}>
                        <Link to="/blogs">BLOGS</Link>
                    </li>

                    {
                        user?.uid ? <li onClick={handleLogOut}>
                            <Link to="/home">LOGOUT</Link>
                        </li>
                            : <li className={splitLocation[1] === "login" ? "active" : ""}>
                                <Link to="/login">LOGIN</Link>
                            </li>
                    }
                    {
                        user?.uid ? <li style={{ borderRadius: "50%" }} className='mt-2 py-3 bg-gray-400  flex flex-col items-center justify-center'>
                            <FontAwesomeIcon style={{ width: "100px" }} icon={faUser}></FontAwesomeIcon>
                            <small className='text-yellow-200'>{user?.displayName}</small>
                        </li> : ""
                    }

                </ul>
            </nav>



        </div>
    )
}

export default Header