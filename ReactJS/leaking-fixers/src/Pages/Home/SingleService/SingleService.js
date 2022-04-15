import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleService = ({ service }) => {


    const { id, name, img, description } = service;
    const { small, large } = service.price;

    const navigate = useNavigate();
    const navigateToServiceDetails = serviceId => {
        navigate(`/service/${serviceId}`);
    }

    return (
        <div className='shadow-xl  relative rounded-lg pb-10'>

            <img style={{ width: "100%" }} src={img} alt="" />

            <h2 className='text-2xl p-2 font-bold'>{name}</h2>

            <p className='p-2 mb-20'>{description}</p>

            <div className=' absolute bottom-0 w-full'>
                <div className='bg-slate-100 '>

                    <h2 className='text-lg text-center bg-slate-200 '>Price</h2>

                    <div className='flex justify-evenly'>
                        <h3>Small</h3>
                        <h3>Large</h3>
                    </div>

                    <div className='flex justify-evenly'>
                        <h3>{small}</h3>
                        <h3>{large}</h3>
                    </div>

                </div>

                <button onClick={() => navigateToServiceDetails(id)} className='  bg-blue-600 text-white font-bold w-full hover:text-yellow-700 active:bg-green-600 active:text-white p-2 tracking-widest	'>Take</button>
            </div>

        </div>
    );
};

export default SingleService;