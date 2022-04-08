import React from 'react';
import { addToLocal, removeFromLocal } from '../../utilities/fakedb';
import './Cosmetic.css'


const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;


    const addToCard = (id) => {

        addToLocal(id);
    }

    const removeFromCard = (id) => {

        removeFromLocal(id);
    }

    const addtoCardWrapper = () => addToCard(id);

    return (
        <div className='product'>
            <h2>Name: {name}</h2>
            <span>Price: {price}</span>
            <br></br>
            {/* <button onClick={addtoCardWrapper}>Add to card</button>
            <br></br> */}

            {/* normally use this */}
            <button onClick={() => addToCard(id)}>Add to card</button>
            <br></br>
            <button onClick={() => removeFromCard(id)}>Remove item</button>
        </div>
    );
};

export default Cosmetic;