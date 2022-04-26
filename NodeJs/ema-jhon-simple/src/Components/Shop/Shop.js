
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'




const Shop = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);




    useEffect(() => {

        const storedCart = getStoredCart();
        const savedCart = [];

        for (const id in storedCart) {

            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //console.log(quantity);
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);


    }, [products])





    const handleAddToCart = (SelectedProduct) => {

        let newCart = [];

        const exists = cart.find(product => product.id === SelectedProduct.id);

        if (exists) {
            exists.quantity++;
            const rest = cart.filter(product => product.id !== SelectedProduct.id);
            newCart = [...rest, exists];
        } else {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        }




        setCart(newCart);
        addToDb(SelectedProduct.id)
    }


    return (
        <div className='shop-container'>

            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>


            <div className="carts-container">

                <Cart cart={cart}>
                    <Link className='inside-button' to="/orders">
                        <button >Review Orders</button>

                        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                </Cart>

            </div>







        </div>
    );
};

export default Shop;