import React from 'react';
import { Link } from 'react-router-dom';
import './TShirt.css'
const TShirt = ({ tshirt, handleAddToCart }) => {

    const { _id, name, picture, price } = tshirt;
    const to = `/tshirt-details/${_id}`;


    return (



        <div className='tshirt-container'>

            <div className="img">
                <img width={100} src={picture} alt="" />
            </div>

            <hr></hr>

            <div className="infor">
                <Link to={to}>
                    <h3>{name}</h3>
                </Link>
                <p>Price: {price}</p>
            </div>

            <button onClick={() => { handleAddToCart(tshirt) }}>
                Add to Cart
            </button>

        </div>


    );
};

export default TShirt;