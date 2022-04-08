import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {


    const ring = useContext(RingContext);


    return (
        <div>
            <h2>Special: {ring}</h2>
        </div>
    );
};

export default Special;