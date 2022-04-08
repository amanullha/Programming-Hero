import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

export const RingContext = createContext('ring');

const Grandpa = () => {

    const ornament = 'diamond ring';

    const [house, setHouse] = useState(1);
    const handleBuyAHouse = () => {
        setHouse(house + 1);
    }


    return (
        <RingContext.Provider value={ornament}>
            <div>
                <h1>Grand pa</h1>
                <h3>house: {house}</h3>
                <button onClick={handleBuyAHouse}>Buy a house</button>
                <div className='grandpa'>

                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;