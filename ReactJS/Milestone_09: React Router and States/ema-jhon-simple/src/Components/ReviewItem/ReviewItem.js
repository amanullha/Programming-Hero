import React from 'react';
import './ReviewItem.css'
import { FaBeer, MdDelete } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';



const ReviewItem = (props) => {

    const { product, deleteShoppingSingleItem } = props;



    const { category, id, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock } = product;

    return (
        <div className='reviewItem-container'>

            <div className='left-side'>
                <div className="image">
                    <img width={100} src={img} alt="" />
                </div>
                <div className="info">
                    <h3 title={name}>{name.length < 20 ? name : name.slice(0, 20) + "..."}</h3>
                    <h4>Price: <span>{price}</span></h4>
                    <h4 >Shipping: <span>{shipping}</span></h4>
                </div>
            </div>


            <div className="delete-item">
                <button onClick={() => { deleteShoppingSingleItem(product) }} className='delete-btn'>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>

                </button>
            </div>
        </div>
    );
};

export default ReviewItem;