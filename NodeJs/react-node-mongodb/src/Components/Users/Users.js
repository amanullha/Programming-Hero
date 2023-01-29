import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));

    }, [])


    const handleUserDelete = (id) => {

        const proceed = window.confirm("are you sure?")

        if (proceed) {
            console.log(id);

            fetch(`http://localhost:5000/users/${id}`, {
                method: "DELETE"
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        console.log("Deleted");

                        const remainingUsers = users.filter(user => user._id !== id);

                        setUsers(remainingUsers);
                    }
                })

        }
    }

    return (
        <div>
            <h1>Total users are: {users.length}</h1>

            <div>
                {
                    users.map(user => <li key={user._id}>Name: {user.name} and email: {user.email}

                        <Link to={`/users/update/${user._id}`}>Update</Link>
                        <button onClick={() => handleUserDelete(user._id)}>x</button>
                    </li>)
                }
            </div>


        </div>
    );
};

export default Users;