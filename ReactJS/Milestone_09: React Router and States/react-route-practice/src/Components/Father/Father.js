import React from 'react';
import MySelf from '../MySelf/MySelf'
import Brother from '../Brother/Brother'
import Sister from '../Sister/Sister'
import './Father.css'


const Father = ({ house }) => {
    return (
        <div>
            <h1>Father</h1>
            <h2>House: {house}</h2>
            <div style={{ display: 'flex' }}>
                <MySelf house={house}></MySelf>
                <Sister house={house}></Sister>
                <Brother house={house}></Brother>
            </div>
        </div>
    );
};

export default Father;