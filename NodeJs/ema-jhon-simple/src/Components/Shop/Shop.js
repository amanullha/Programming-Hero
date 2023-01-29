
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'




const Shop = () => {

    const [cart, setCart] = useCart([]);
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalProducts, setTotalProducts] = useState(0);

    const [products, setProducts] = useState([]);

    useEffect(() => {

        // every page a kotho ta product show krbo + add hobe kon page a achi

        axios.get(`http://localhost:5000/products?page=${page}&pageSize=${pageSize}`)
            .then(data => setProducts(data.data))

    }, [page, pageSize])



    useEffect(() => {

        axios.get('http://localhost:5000/productsCount')
            .then(data => {
                const count = data.data.count;
                setTotalProducts(count);
                const pages = Math.ceil(count / 10);

                setPageCount(pages);
            })

    }, [])



    useEffect(() => {
        const pages = Math.ceil(totalProducts / pageSize);

        setPageCount(pages);
        setPage(1);

    }, [pageSize])









    const handleAddToCart = (SelectedProduct) => {

        let newCart = [];

        const exists = cart.find(product => product._id === SelectedProduct._id);

        if (exists) {
            exists.quantity++;
            const rest = cart.filter(product => product._id !== SelectedProduct._id);
            newCart = [...rest, exists];
        } else {
            SelectedProduct.quantity = 1;
            newCart = [...cart, SelectedProduct];
        }




        setCart(newCart);
        addToDb(SelectedProduct._id)
    }


    return (
        <div className='shop-container'>
            <div>


                <div className="products-container">
                    {
                        products.map(product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }

                </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(nbr => <button
                                className={page == nbr + 1 ? 'selected' : ""}

                                onClick={() => setPage(nbr + 1)}
                            >{nbr + 1}</button>)
                    }

                    <select onChange={e => setPageSize(e.target.value)}>
                        <option value="10">10</option>
                        <option value="5">5</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>

                </div>
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