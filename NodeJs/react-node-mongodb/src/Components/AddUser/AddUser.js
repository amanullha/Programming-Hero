import React from 'react';

const AddUser = () => {


    const handleAddUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        console.log(name, email);

        const user = { name, email };


        // send data to the user

        fetch('http://localhost:5000/users/add', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success : ', data);
                alert("user added successfully")
                e.target.reset();
            })











    }


    return (
        <div>
            <h1>Add new user</h1>

            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" required placeholder='Enter your name' />
                <br />
                <input type="email" name="email" id="" required placeholder='Enter your email' />
                <br />
                <input type="submit" value="Add user" />
            </form>
        </div>
    );
};

export default AddUser;