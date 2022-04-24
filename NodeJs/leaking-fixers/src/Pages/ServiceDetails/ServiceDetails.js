import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SingleService from '../Home/SingleService/SingleService';

const ServiceDetails = () => {

    const serviceId = useParams().serviceId;

    const [service, setService] = useState({});

    useEffect(() => {
        // axios.get('services.json')
        axios.get(`http://localhost:5000/services/${serviceId}`)
            .then(data => {
                setService(data.data);
                console.log(data.data);
            })
    }, [])

    return (
        <div>
            <h1 className='text-center'>Service id: {serviceId} </h1>

            <div className='mx-auto my-16 w-1/2 lg:w-1/4 p-2 md:p-5 bg-blue-300 bg-opacity-20'>
                {<SingleService
                    key={service._id}
                    service={service}
                    isOnButton={true}

                ></SingleService>}
            </div>

            <div className='text-center'>

                <Link to='/checkout'>
                    <button className='bg-blue-600 text-white px-4 py-1 font-bold rounded-full hover:text-yellow-500'>Proceed checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;