import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLInk/CustomLink';
import './Header.css'
import app from '../../firebase.init'

import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'


const auth = getAuth(app);



const Header = () => {

    const [currentUser, setCurrentUser] = useState({});



    //bujhi nai aii part ta
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser({});
            }
        });

        return () => unsubscribe;
    }, []);


    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log("Sing Out successful");
            })
            .catch((error) => {
                console.log(error);
            });
    };








    return (
        <div className='header-container'>
            <div className="header-contents flex items-center justify-between ">
                <div className="logo">
                    <Link to='/'> <img width={200} src="logo.png" alt="" /></Link>
                </div>

                <nav className='flex items-center gap-3 '>
                    <CustomLink to="/home">
                        HOME
                    </CustomLink>
                    <CustomLink to="/reviews">
                        REVIEWS
                    </CustomLink>

                    <CustomLink to="/blogs">
                        BLOGS
                    </CustomLink>
                    <CustomLink to="/about">
                        ABOUT
                    </CustomLink>
                    {
                        currentUser?.uid ? (<CustomLink onClick={handleLogout} to="/login">LOGOUT</CustomLink>) : (<CustomLink to="/login">LOGIN</CustomLink>)
                    }
                </nav>
            </div>
        </div>
    );
};

export default Header;