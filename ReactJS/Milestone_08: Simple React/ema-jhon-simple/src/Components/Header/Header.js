import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <div className="container">
                <img src={logo} alt="" />
                <ul className='list-items'>
                    <li> <a href='/shop'> Shop</a> </li>
                    <li> <a href='/orders'> Orders</a> </li>
                    <li> <a href='/inventory'>Inventory</a> </li>
                    <li> <a href='/about'>About</a> </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;