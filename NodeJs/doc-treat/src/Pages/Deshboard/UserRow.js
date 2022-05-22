import React from 'react';

const UserRow = ({ user }) => {

    const { email } = user;


    return (

        <tr>
            <th>{email}</th>
        </tr>

    );
};

export default UserRow;