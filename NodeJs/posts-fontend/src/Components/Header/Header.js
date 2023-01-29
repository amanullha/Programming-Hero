import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div style={{ margin: "30px 15px" }}>

            <Link style={{ margin: "20px 15px" }} to='/show-posts'>Show posts</Link>
            <Link style={{ margin: "20px 15px" }} to='/add-post'>Add post</Link>
            <Link style={{ margin: "20px 15px" }} to='/delete-post'>Delete post</Link>

        </div>
    );
};

export default Header;