import React, { useState, useEffect } from 'react';
import axios from 'axios';



const useServiceDetails = (serviceId) => {
    const [service, setService] = useState({});

    useEffect(() => {
        // axios.get('services.json')
        axios.get(`http://localhost:5000/services/${serviceId}`)
            .then(data => {
                setService(data.data);
                console.log(data.data);
            })
    }, [serviceId])

    return [service, setService]
};

export default useServiceDetails;