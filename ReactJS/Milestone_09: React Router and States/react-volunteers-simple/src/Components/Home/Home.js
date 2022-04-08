import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Volenteers from '../Volenteers/Volenteers';

const Home = () => {
    const [voleteers, setVolenteers] = useState([]);


    useEffect(() => {

        axios.get('data.json')
            .then(data => setVolenteers(data.data));
    }, [])

    return (
        <div>
            <button>click me {voleteers.length}</button>
        </div>
    );
};

export default Home;