import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("services.json")
            .then(res => setServices(res.data))
    }, [])
    return [services, setServices];
};

export default useServices;
