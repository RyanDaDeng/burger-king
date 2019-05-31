import React from 'react';
import styles from './Order.module.css';

function Order({ingredients, price, customer}) {


    const ingredientsTransformed = [];

    for (let ingredientName in ingredients) {
        if(ingredients.hasOwnProperty(ingredientName)){
            ingredientsTransformed.push(
                {
                    name: ingredientName,
                    amount: ingredients[ingredientName]
                }
            )
        }
    }

    const ingredientOutput = ingredientsTransformed.map(ig =>{
        return <span className={styles.Ingredient} key={ig.name}>{ig.name} ({ig.amount}) </span>
    });

    console.log(ingredientOutput);

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: {Number.parseFloat(price).toFixed(2)} </p>
        </div>
    )
}

export default Order;