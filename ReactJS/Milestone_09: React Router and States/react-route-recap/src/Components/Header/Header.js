import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            {/* <Link to='/'>Home</Link>
            <Link to='/friends'>Friends</Link>
            <Link to='/about'>About</Link> */}

            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/friends'>friend</CustomLink>
            <CustomLink to='/about'>About</CustomLink>


        </div>
    );
};

export default Header;