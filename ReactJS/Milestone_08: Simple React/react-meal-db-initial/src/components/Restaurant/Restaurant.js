import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restaurant.css';

const Restaurant = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);


    // initial load orders from local storage after starting page/refreshed page/ oping time

    useEffect(() => {

        const initialStoredOrders = getStoredCart();

        const storedOrders = [];

        for (const idMeal in initialStoredOrders) {
            const addedMeal = meals.find(Meal => Meal.idMeal === idMeal)

            if (addedMeal) {
                const quantity = initialStoredOrders[idMeal];
                addedMeal.quantity = quantity;

                storedOrders.push(addedMeal);
            }
        }

        setOrders(storedOrders);

    }, [meals]);

    const addToCart = (meal) => {

        const isAlreadyOrdered = orders.find(Meal => Meal.idMeal === meal.idMeal);

        let newOrderedList = [];

        if (isAlreadyOrdered) {
            const quantity = isAlreadyOrdered.quantity;

            const newQuantity = quantity + 1;
            isAlreadyOrdered.quantity = newQuantity;

            const restOrders = orders.filter(restMeal => restMeal.idMeal !== meal.idMeal);

            newOrderedList = [...restOrders, isAlreadyOrdered];


        }
        else {
            meal.quantity = 1;
            newOrderedList = [...orders, meal];

        }

        
        setOrders(newOrderedList);

        // add to local storage
        addToDb(meal.idMeal);
    }

    return (
        <div className="restaurant-menu">
            <div className="meals-container">
                {
                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        addToCart={addToCart}
                    ></Meal>)
                }
            </div>
            <div className="order-list">
                <OrderList orders={orders}></OrderList>
            </div>
        </div>

    );
};

export default Restaurant;