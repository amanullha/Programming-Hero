import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {


    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);




    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);



    const handleAddToCart = (selectedProduct) => {


        const exist = cart.find(product => product.id === selectedProduct.id);

        let newCart = [];
        if (!exist) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {

            const restProduct = cart.filter(product => product.id !== selectedProduct.id);
            selectedProduct.quantity = exist.quantity + 1;

            newCart = [...restProduct, selectedProduct];
        }


        setCart(newCart);

        addToDb(selectedProduct.id);
    }


    // load selected carts information after page opened or refresh depend on products, means after loaded the products then this useEffect will called. 

    useEffect(() => {

        // got the selected cart ids
        const selectedCartIds = getStoredCart();

        let selectedCarts = [];

        for (const id in selectedCartIds) {
            const quantity = selectedCartIds[id];

            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                addedProduct.quantity = quantity;
                selectedCarts.push(addedProduct);
            }
        }

        setCart(selectedCarts);

    }, [products]);


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>


            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;