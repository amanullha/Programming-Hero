import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css'

const auth = getAuth(app);

const Header = () => {

    const [user] = useAuthState(auth)

    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/register">Register</Link>
                {
                    user?.uid ? <a onClick={() => signOut(auth)}>Sign Out</a> : <Link to="/login">SignIn</Link>
                }
                {
                    user?.uid ? (<div className='bio'>
                        <img src={user?.photoURL ? (user.photoURL) : ("https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png")} alt="" />
                        <h3>{user?.displayName ? user.displayName : ""}</h3>
                    </div>) : ("")
                }
            </nav>
        </div>
    );
};

export default Header;