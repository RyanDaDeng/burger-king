import React from 'react'
import {connect} from "react-redux";
import styles from './ShoppingCart.module.css';

const ShoppingCart = (props) => (
    <>
        <div className={styles.ShoppingCart}>
            <div>Total Price: {props.totalPrice.toFixed(2)}</div>
        </div>

    </>
);


const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};
export default connect(mapStateToProps)(ShoppingCart);