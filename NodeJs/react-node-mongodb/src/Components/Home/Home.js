import React from 'react';
import AddUser from '../AddUser/AddUser';
import Users from '../Users/Users';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Home </h1>
            <Users></Users>
            <AddUser></AddUser>
        </div>
    );
};

export default Home;