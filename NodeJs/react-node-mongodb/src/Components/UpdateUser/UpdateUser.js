import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {

    const userId = useParams().userId;

    const [user, setUser] = useState({});


    useEffect(() => {


        fetch(`http://localhost:5000/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUser(data);
                console.log(data);
            })

    }, [])



    const handleUpdatUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log(name, email);

        const updatedUser = { name, email };



        // Update data to the user

        fetch(`http://localhost:5000/users/${userId}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Updated successfully : ', data);
                alert("user updated successfully")
                e.target.reset();
            })





    }

    return (
        <div>
            <h1>Update user : {user._id}</h1>

            <form onSubmit={handleUpdatUser}>
                <input type="text" name="name" id="" required placeholder={user.name} />
                <br />
                <input type="email" name="email" id="" required placeholder={user.email} />
                <br />
                <input type="submit" value="Update user" />
            </form>
        </div>
    );
};

export default UpdateUser;