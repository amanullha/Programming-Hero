import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <nav className='header'>
            <div className="container">
                <img src={logo} alt="" />
                <ul className='list-items'>
                    <li> <CustomLink to='/shop'> Shop</CustomLink> </li>
                    <li> <CustomLink to='/orders'> Orders</CustomLink> </li>
                    <li> <CustomLink to='/inventory'>Inventory</CustomLink> </li>
                    <li> <CustomLink to='/about'>About</CustomLink> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;