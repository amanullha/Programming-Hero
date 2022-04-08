import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house }) => {
    return (
        <div>
            <h1>Myself</h1>
            <h2>House: {house}</h2>
            <Special ></Special>
        </div>
    );
};

export default MySelf;