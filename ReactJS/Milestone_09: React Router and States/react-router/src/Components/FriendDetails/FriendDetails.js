import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetails = () => {

    const { friendId } = useParams();

    const [friend, setFriend] = useState({});

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${friendId}`)
            .then(data => setFriend(data.data))

    }, []);


    return (
        <div>
            <h1> Friend Details of {friendId} </h1>
            <h3>Name: {friend.name}</h3>
            <h3>Email: {friend.email}</h3>
            <h3>Website: {friend.website}</h3>
            <h3>City: {friend.address?.city}</h3>
        </div>
    );
};

export default FriendDetails;