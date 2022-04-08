import React from 'react';
import './SingleCart.css';

const SingleCart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div className='single-cart-container'>
            <div className="info">
                <img width={10} height={10} src={cart.picture} alt="" />
                <h2 title={cart.name}>{cart.name.lenth > 10 ? cart.name.slice(0, 9) : cart.name}</h2>
            </div>
            <div onClick={() => { handleRemoveFromCart(cart) }} className="remove-btn">
                X
            </div>
        </div>
    );
};

export default SingleCart;