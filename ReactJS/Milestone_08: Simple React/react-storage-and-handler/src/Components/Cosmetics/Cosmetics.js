import React, { useEffect, useState } from 'react';
import { add, mul } from '../../utilities/calculate';
import { deleteShoppingCart } from '../../utilities/fakedb';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {

    const [cosmetices, setCosmetices] = useState([]);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetices(data))

    }, [])

    return (
        <div>
            <h1>Cosmeticse</h1>
            <button onClick={() => {
                deleteShoppingCart();
            }}>Clear shopping cart</button>

            {
                cosmetices.map(cosmetic => <Cosmetic key={cosmetic.id} cosmetic={cosmetic}></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;