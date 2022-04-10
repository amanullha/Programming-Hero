import React from 'react';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'


const Orders = () => {


    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    console.log(products);

    const deleteShoppingSingleItem = (clickedProduct) => {

        console.log(clickedProduct);
        const newCart = cart.filter(item => item.id !== clickedProduct.id);

        setCart(newCart);
        removeFromDb(clickedProduct.id);


    }

    return (
        <div className='shop-container'>

            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        deleteShoppingSingleItem={deleteShoppingSingleItem}
                    ></ReviewItem>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;