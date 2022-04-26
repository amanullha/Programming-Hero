import axios from "axios";
import { useEffect, useState } from "react";
import { getStoredCart } from "../../utilities/fakedb";

const useCart = () => {

    const [cart, setCart] = useState([]);

    useEffect(() => {

        const storedCart = getStoredCart();

        const saveCart = [];

        console.log("savedCart: ", storedCart);

        const orderedIds = Object.keys(storedCart);
        console.log(" orderedIds: ", orderedIds);

        fetch('http://localhost:5000/productsByIds', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedIds)
        })
            .then(res => res.json())
            .then(data => {

                const products = data;

                for (const _id in storedCart) {

                    const addedProduct = products.find(product => product._id === _id);

                    if (addedProduct) {

                        const quantity = storedCart[_id];
                        addedProduct.quantity = quantity;
                        saveCart.push(addedProduct);
                    }
                }
                setCart(saveCart);
                console.log("cart in saved: ", saveCart);
            })

        // for (const _id in storedCart) {

        //     const addedProduct = products.find(product => product._id === _id);

        //     if (addedProduct) {

        //         const quantity = storedCart[_id];
        //         addedProduct.quantity = quantity;
        //         saveCart.push(addedProduct);
        //     }
        // }
        // setCart(saveCart);


    }, [])

    return [cart, setCart];
};

export default useCart;