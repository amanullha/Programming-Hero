import axios from "axios";
import { useEffect, useState } from "react"


const useTShirt = () => {
    const [tshirts, setTshirts] = useState([]);

    useEffect(() => {

        axios.get('tshirts.json')
            .then(data => setTshirts(data.data));

    }, [])


    return [tshirts, setTshirts];
}

export default useTShirt;
