import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props.country);
    const { name, population, flags } = props.country;

    // console.log(flags.png);
    return (
        <div className='country-container'>
            <img class="rounded " height={150} width={250} src={flags.png} alt="" />
            <h2> {name.common}</h2>
            <h4 className='bg-primary text-white p-2 rounded '>Population: {population}</h4>
        </div>
    );
};

export default Country;