import React from 'react';
import ListItem from '../ListItem/ListItem';
import './Cart.css'

const Cart = (props) => {

    // console.log(props);
    const { cart, chooseItem, resetItem, deleteSingleItem } = props;



    return (
        <div className='cart-container'>
            <h2>Book details</h2>
            {/* add selected item here  */}
            {
                cart.map(c => <ListItem
                    key={c.ID}
                    item={c}
                    deleteSingleItem={deleteSingleItem}
                ></ListItem>)

            }

            <div className="operation">
                <button className='oneforme' onClick={chooseItem}>Choose one for Me</button>



                <button className='clear' onClick={resetItem}>Choose Again</button>
            </div>


        </div>
    );
};

export default Cart;