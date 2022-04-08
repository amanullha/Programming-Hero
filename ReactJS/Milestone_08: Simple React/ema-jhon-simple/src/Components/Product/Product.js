import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = ({ handleAddToCart, product }) => {

    // console.table(props.product);
    // const { handleAddToCart, product } = props;
    const { name, img, seller, price, ratings } = product;



    return (
        <div className='product'>
            <img src={img} alt="product image" />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='product-seller'>Manufacture: {seller}</p>
                <p className='product-ratings'>Rating: {ratings}</p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='button-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
        </div>
    );
};

export default Product;