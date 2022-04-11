import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <nav className='header'>
            <div className="container">
                <img src={logo} alt="" />
                <ul className='list-items'>
                    <li> <CustomLink to='/shop'> Shop</CustomLink> </li>
                    <li> <CustomLink to='/orders'> Orders</CustomLink> </li>
                    <li> <CustomLink to='/inventory'>Inventory</CustomLink> </li>
                    <li> <CustomLink to='/about'>About</CustomLink> </li>

                    {
                        user ? <li onClick={handleSignOut}> <CustomLink to='/login'>LogOut</CustomLink> </li> :
                            <li> <CustomLink to='/login'>LogIn</CustomLink> </li>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Header;