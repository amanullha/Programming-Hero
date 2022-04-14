import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const serviceId = useParams().serviceId;

    return (
        <div>
            <h1>Service id: {serviceId} </h1>

            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='bg-blue-600 text-white px-4 py-1 font-bold rounded-full hover:text-yellow-500'>Proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;