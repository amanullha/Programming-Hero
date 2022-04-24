import axios from "axios";
import { useState, useEffect } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // axios.get('services.json')
        axios.get('http://localhost:5000/services')
            .then(data => setServices(data.data))
    }, [])
    return [services, setServices];
}

export default useServices;