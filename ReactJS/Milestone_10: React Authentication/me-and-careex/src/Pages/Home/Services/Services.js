import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../../hooks/useServices';
import SingleService from '../SingleService/SingleService';

const Services = () => {

    const [services, setServices] = useServices();
    // console.log(services);

    const navigate = useNavigate();
    const handleTakeService = (serviceId) => {

        navigate(`/checkout/${serviceId}`);
    }

    return (
        <div id='services'>
            <div className='flex justify-center items-center w-full md:w-10/12 mx-auto my-3'>
                <hr style={{ width: "30%" }}></hr>
                <h1 className=' my-10 mx-2 text-3xl font-bold tracking-widest text-green-900'>My Clinical Services</h1>
                <hr style={{ width: "30%" }}></hr>
            </div>
            <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5  w-full md:w-10/12 mx-auto'>
                {
                    services.map(service => <SingleService
                        key={service.id}
                        service={service}
                        handleTakeService={handleTakeService}
                    />)
                }
            </div>

        </div>
    );
};

export default Services;