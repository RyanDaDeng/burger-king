import React from 'react';
import styles from './Burger.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import {withRouter} from 'react-router-dom';

const burger = (props) => {

    // get keys
    console.log(props.ingredients);
    let transformedIngredients = Object.keys(props.ingredients).map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map(
            (_, i) => {
                return <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
            }
        );
    }).reduce((arr, el) => {
        // reduce means construct a new array
        // arr here initially is [], and loop each element and use concat to merge array and return
        // a new merged array
        // in this way, transform the data into one single array
        return arr.concat(el);
    }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top"/>

            {transformedIngredients}

            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);