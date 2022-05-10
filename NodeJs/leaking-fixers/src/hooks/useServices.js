import axios from "axios";
import { useState, useEffect } from "react";


const useServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // axios.get('services.json')
        axios.get('https://calm-hollows-18504.herokuapp.com/services')
            .then(data => setServices(data.data))
    }, [])
    return [services, setServices];
}

export default useServices;