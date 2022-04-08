import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'


const Header = () => {
    return (
        <nav>
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/order-review">OrderReview</CustomLink>
            <CustomLink to="/grand-pa">GrandPa</CustomLink>
        </nav>
    );
};

export default Header;