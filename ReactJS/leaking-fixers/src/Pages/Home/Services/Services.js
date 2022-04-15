import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('services.json')
            .then(data => setServices(data.data))
    }, [])



    return (
        <div id='services'>
            <div className='flex justify-center items-center gap-3 my-5 '>
                <hr className='w-3/12 ' />
                <h1 className='text-3xl text-center my-10 tracking-widest'>Our Services</h1>
                <hr className='w-3/12' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols3 xl:grid-cols-4 gap-5 m-5 mx-auto'>
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                    >

                    </SingleService>
                    )
                }

            </div>
        </div>
    );
};

export default Services;