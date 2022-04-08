import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    // console.log(props);
    const { name, username, id } = props.friend;

    const navigate = useNavigate();


    return (
        <div>
            <h1>Name: {name}</h1>
            <h4>{username}   {id}</h4>
            <button onClick={() => {
                navigate(`/friend/${id}`)
            }}>click me</button>
        </div>
    );
};

export default Friend;