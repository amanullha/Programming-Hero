import React from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Cart.css'

const Cart = ({ carts, handleRemoveFromCart }) => {

    // const { items, total } = totalPrice(carts);
    return (
        <div className='cart-container'>
            {
                carts.map(cart => <SingleCart
                    key={cart._id}
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></SingleCart>)
            }
        </div>
    );
};



// const totalPrice = (carts) => {
//     let total = 0;
//     let items = 0;
//     for (const cart in carts) {
//         total += (parseInt(cart.price) * parseInt(cart.quantity));
//         items += parseInt(cart.quantity);
//     }
//     return { items, total };
// }

export default Cart;