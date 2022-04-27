import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Orders = () => {

    const [orders, setOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {


        axios.get(`http://localhost:5000/orders?userId=${user.uid}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(data => setOrders(data.data))



    }, [user])



    return (
        <div>

            <h1>orders: {orders.length}</h1>

        </div>
    );
};

export default Orders;