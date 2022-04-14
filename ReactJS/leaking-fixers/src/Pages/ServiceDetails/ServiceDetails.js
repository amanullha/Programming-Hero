import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const serviceId = useParams().serviceId;

    return (
        <div>
            <h1>Service id: {serviceId} </h1>
        </div>
    );
};

export default ServiceDetails;