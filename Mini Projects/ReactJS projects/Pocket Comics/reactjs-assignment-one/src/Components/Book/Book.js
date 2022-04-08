import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Book.css'





const Book = ({ book, handleAddToCart }) => {
    //console.log(book);








    return (
        <div className='book-container'>
            <div className="image">
                <img src={book.Image} alt="comics image" />
            </div>
            <div className="book-info">
                <h2>{book.Name}</h2>
                <h3> Price: {book.Price}</h3>
            </div>

            <button onClick={() => handleAddToCart(book)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Book;