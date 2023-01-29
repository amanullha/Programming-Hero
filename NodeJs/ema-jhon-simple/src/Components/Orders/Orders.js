import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'


const Orders = () => {


    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();

    console.log(products);

    const deleteShoppingSingleItem = (clickedProduct) => {

        console.log(clickedProduct);
        const newCart = cart.filter(item => item._id !== clickedProduct._id);

        setCart(newCart);
        removeFromDb(clickedProduct._id);


    }

    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product._id}
                        product={product}
                        deleteShoppingSingleItem={deleteShoppingSingleItem}
                    ></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link className='inside-button' to="/shipment">
                        <button >Proceed Orders</button>

                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;