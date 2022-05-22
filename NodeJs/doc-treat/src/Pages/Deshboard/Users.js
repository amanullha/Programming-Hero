import React from 'react';
import { useQuery } from 'react-query';
import MyLoading from '../Shared/MyLoading/MyLoading';
import UserRow from './UserRow';

const Users = () => {


    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))


    if (isLoading) {
        return <MyLoading />
    }





    return (
        <div>
            <h1 className='text-3xl text-secondary font-bold text-center'>All users {users.length}</h1>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Services</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                     {
                         users.map(user=><UserRow 
                         key={user._id}
                         user={user}

                         ></UserRow>)
                     }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;