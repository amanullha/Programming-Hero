import { faShoppingCart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './ListItem.css'

const ListItem = ({ item, deleteSingleItem }) => {

    const { Image, Name } = item;


    return (
        <div className='item-container'>
            <img src={Image} alt="" />
            <h3>{Name}</h3>




            <span className='delete' onClick={() => { deleteSingleItem(item) }}>
                <FontAwesomeIcon
                    icon={faTrash}

                ></FontAwesomeIcon>
            </span>




        </div>
    );
};

export default ListItem;