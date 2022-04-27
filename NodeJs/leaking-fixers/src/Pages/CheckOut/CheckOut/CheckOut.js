import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CheckOut = () => {

    const service = useParams().serviceName;

    const [user] = useAuthState(auth);


    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const address = e.target.address.value;
        const phone = e.target.address.phone

        const order = {

            email: user.email,
            userId: user.uid,
            name: user.displayName,
            service: service,
            address: address,
            phone: phone

        }

        axios.post('http://localhost:5000/orders', order)
            .then(function (response) {
                if (response.data.insertedId) {
                    toast("Placed Order");
                    e.target.reset();
                }
            })
            .catch(function (error) {
                console.log("order error: ", error);
            })




    }



    return (
        <div className=' h-full'>
            <h1 className='text-center text-4xl my-10'>Place Your Order</h1>
            <hr></hr>


            <div className='bg-black bg-opacity-20 p-5 mb-20'>

                <form className='flex flex-col gap-5' onSubmit={handlePlaceOrder}>

                    <input value={user.displayName} className='bg-gray-200 border-b-2 pl-2 py-1' placeholder=' name' type="text" name="name" id="" required readOnly disabled />

                    <input value={user.email} className='bg-gray-200 border-b-2  pl-2 py-1' placeholder=' email' type="email" name="email" id="" required readOnly disabled />

                    <input value={service} className='bg-gray-200 border-b-2 pl-2 py-1' placeholder=' service' type="text" name="service" id="" readOnly disabled />

                    <textarea placeholder='Address' className='bg-gray-200 border-b-2  pl-2 py-1' name="address" id="" cols="15" rows="3" required></textarea>

                    <input placeholder='Phone' className='bg-gray-200 border-b-2  pl-2 py-1' type="number" name="phone" id="" required />

                    <input className='bg-blue-700 text-white tracking-widest font-bold text-2xl active:bg-blue-800 active:text-yellow-800' type="submit" value="Place Order" />

                </form>
            </div>

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CheckOut;