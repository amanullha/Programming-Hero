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
        <div>
            <h2 className='text-center text-3xl'>Services: {services.length}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 m-5'>
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