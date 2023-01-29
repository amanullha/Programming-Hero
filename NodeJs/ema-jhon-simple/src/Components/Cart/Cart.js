import React from 'react';
import './Cart.css'


const Cart = (props) => {
    console.log(props.children);
    const { cart } = props;


    console.log("cart ", cart);

    const { totalPrice, totalShipping, totalQuantity } = calculatePrice(cart);

    const total = totalPrice + totalShipping;
    const tax = total * 0.15;
    // const tax = 0;
    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div className='cart-container'>
            <div className="cart-info">
                <h3>Order Summary</h3>
                <hr></hr>

                <p>Selected Items: {totalQuantity}</p>
                <p>Total Price: $ {totalPrice.toFixed(2)}</p>
                <p>Total Shipping: $ {totalShipping.toFixed(2)}</p>
                <p>Tax: $ {tax.toFixed(2)}</p>

                <hr></hr>

                <h3>Grand Total: $ {grandTotal.toFixed(2)}</h3>

                {
                    props.children
                }

            </div>
        </div>
    );
};


const calculatePrice = (products) => {
    let totalPrice = 0, totalShipping = 0, totalQuantity = 0;
    for (const product of products) {
        totalQuantity += product.quantity;
        totalPrice += product.price * product.quantity;
        totalShipping += product.shipping;
    }

    return { totalPrice, totalShipping, totalQuantity };
}


export default Cart;