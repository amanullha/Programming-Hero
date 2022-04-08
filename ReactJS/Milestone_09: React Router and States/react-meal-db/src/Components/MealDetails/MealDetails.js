import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './MealDetails.css'


const MealDetails = () => {

    const mealId = useParams().mealId;

    const [meal, setMeal] = useState({});


    const navigate = useNavigate();

    useEffect(() => {

        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            .then(data => {

                setMeal(data.data.meals[0]);

                navigate(`/meals/${mealId}`);
            })
    }, [mealId])

    return (
        <div className='details-container'>

            <img src={meal.strMealThumb} alt="" />
            <h4>{meal.strMeal} ({mealId})</h4>
            <h4>{meal.strTags}</h4>
            <hr></hr>
            <p>{meal.strInstructions}</p>


        </div>
    );
};

export default MealDetails;