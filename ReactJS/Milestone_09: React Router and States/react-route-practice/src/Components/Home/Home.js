import React, { useState } from 'react';
import useTShirt from '../../hook/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {

    const [tshirts, setTshirts] = useTShirt();
    const [carts, setCarts] = useState([]);

    const handleAddToCart = (selectedTshirt) => {

        const exist = carts.find(cart => cart._id === selectedTshirt._id)

        if (exist) {

            alert('item already added')
        }
        else {
            setCarts([...carts, selectedTshirt]);

        }
    }

    const handleRemoveFromCart = (selectedTshirt) => {

        const newCarts = carts.filter(cart => cart._id !== selectedTshirt._id);
        setCarts(newCarts);
    }

    return (
        <div className='home-container'>
            <div className="t-shirts">
                {
                    tshirts.map(tshirt => <TShirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>

            <div className="cart-container">
                <Cart

                    carts={carts}
                    handleRemoveFromCart={handleRemoveFromCart}

                ></Cart>
            </div>

        </div>
    );
};

export default Home;