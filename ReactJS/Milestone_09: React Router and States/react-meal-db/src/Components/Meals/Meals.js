import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'


const Meals = () => {

    const [searchText, setSearchText] = useState('fish');

    const [meals, setMeals] = useState([]);


    const updateSearchText = (e) => {

        setSearchText(e.target.value);
    }


    useEffect(() => {

        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(data => {
                setMeals(data.data.meals);

            })

    }, [searchText])




    return (
        <div>
            <h1>Choose your Foods</h1>

            <input
                onChange={updateSearchText} type="text"
                placeholder='Enter food Name'
            />

            <p>result foods: {meals.length}</p>

            <div className="meals-container">

                {

                    meals.map(meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                    ></Meal>)
                }




            </div>

        </div>
    );
};

export default Meals;