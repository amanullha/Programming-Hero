import React, { useState, useEffect } from 'react';
import axios from 'axios';



const useServiceDetails = (serviceId) => {
    const [service, setService] = useState({});

    useEffect(() => {
        // axios.get('services.json')
        axios.get(`https://calm-hollows-18504.herokuapp.com/services/${serviceId}`)
            .then(data => {
                setService(data.data);
                console.log(data.data);
            })
    }, [serviceId])

    return [service, setService]
};

export default useServiceDetails;