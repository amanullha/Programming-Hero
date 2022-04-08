import React from 'react';
import { useParams } from 'react-router-dom';

const TShirtDetails = () => {

    const tshirtId = useParams().tshirtId;

    console.log(tshirtId);

    
    return (
        <div>
            <h1>TShirtDetails</h1>

        </div>
    );
};

export default TShirtDetails;