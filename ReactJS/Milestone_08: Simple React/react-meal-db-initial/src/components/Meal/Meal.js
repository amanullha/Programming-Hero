import React from 'react';
import './Meal.css';

const Meal = (props) => {
    // console.log(props.meal);
    const { strMeal, strInstructions, strMealThumb } = props.meal;
    const addToCart = props.addToCart;

    return (
        <div className="meal">
            <img src={strMealThumb} alt="" />
            <h4>{strMeal}</h4>

            <p>{strInstructions.slice(0, 100)}</p>
            <button onClick={() => { addToCart(props.meal) }}>Add this Food</button>
        </div>
    );
};

export default Meal;