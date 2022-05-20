import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faUserCircle } from '@fortawesome/free-solid-svg-icons'




const NavBar = () => {

    const [user, loading, error] = useAuthState(auth);

    const navigate = useNavigate();


    const goToStartingPage = () => {
        navigate('/')
    }
    const logOutUser = () => {
        signOut(auth);
    }
    console.log(user);

    const menuItems = <>

        <li><Link to="/home">Home</Link ></li>
        <li><Link to="/take-appointment">Appiontment</Link ></li>
        <li><Link to="/review">Review</Link ></li>
        <li><Link to="/contact-us">Contact Us</Link ></li>
        <li ><Link to="/about">About</Link ></li>

        <li >{user ? '' : <Link to="/login">Login</Link >}</li>

        <li >{user ? "" : <Link to="sign-up">SignUp</Link >}</li>

    </>


    const userProfile = user ? <>


        <div className="dropdown dropdown-end ">
            <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-secondary" title={user?.displayName}>
                    {/* <img src="https://api.lorem.space/image/face?hash=33791" /> */}
                    {
                        user?.photoURL ? <img src={user?.photoURL} /> :
                            <FontAwesomeIcon className='w-full h-full ' icon={faUserCircle} />
                    }




                </div>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <Link to='/profile' className="justify-between">
                        Profile
                        <span className="badge">New</span>
                    </Link >
                </li>
                <li><Link to='/setting'>Settings</Link ></li>
                <li><a onClick={logOutUser} >Logout</a ></li>
            </ul>
        </div>


    </> : '';


    return (
        <div className="navbar bg-base-100 flex justify-between items-center">




            {/* <div className="navbar-start bg-slate-400 "> */}
            <div className="  ">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {menuItems}


                    </ul>

                </div>
                {/* <a className=" text-2xl bg-gradient-to-r from-purple-400 to-pink-600">DocTreat</Link > */}

                {/* <h1
                    className="font-extrabold text-transparent text-4xl  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-700 to-green-600"
                >
                    DocTreat
                </h1> */}

                <img onClick={goToStartingPage} className='cursor-pointer h-[60px] w-[180px]' src="logo.png" alt="" />

            </div>




            <div className="navbar-center hidden lg:flex   ">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                    {
                        userProfile
                    }
                </ul>

            </div>


            {/* <div className="navbar-end">
                <a className="btn">Get started</Link >
            </div> */}

            <div className='lg:hidden'>
                {
                    userProfile
                }
            </div>





        </div>
    );
};

export default NavBar;