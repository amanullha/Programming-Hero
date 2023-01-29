import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Orders = () => {


    const [orders, setOrders] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {


        fetch('http://localhost:5000/orders', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status !== 200) {
                    navigate('/login');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
            })






    }, [])




    return (
        <div>

        </div>
    );
};

export default Orders;