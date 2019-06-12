import React, {Component} from 'react';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosOrders from "../../api/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";


import * as actionTypes from '../../store/actions';
import {connect} from "react-redux";



class BurgerBuilder extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }

    state = {
        canPurchase: false,
        purchasing: false,
        isLoading: false,
        error: false
    };

    componentDidMount() {
        // axiosOrders.get('https://burgerking-backend.firebaseio.com/ingredients.json')
        //     .then(response => {
        //         this.setState({ingredients: response.data})
        //     }).catch(error => {
        //     this.setState({error: true})
        // });
    }

    updatePurchaseState(ingredients) {
        const totalQuantity = Object.values(ingredients).reduce((sum, el) => {
            return sum + el;
        }, 0);

        console.log(totalQuantity);
        return totalQuantity > 0;
    }


    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    purchaseContinueHandler = () => {
        console.log('22')
        this.props.history.push({
            pathname: '/checkout'
        });
    };

    render() {
        const disabledInfo = {
            ...this.props.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients cannot be loaded!</p> : <Spinner/>;
        if (this.props.ingredients !== null) {
            burger = (
                <>
                    <Burger ingredients={this.props.ingredients}/>

                    <BuildControls
                        disabled={disabledInfo}
                        conrtols={this.props.ingredients}
                        ingredientAdded={this.props.onIngredientAdded}
                        ingredientRemoved={this.props.onIngredientRemoved}
                        canPurchase={this.updatePurchaseState(this.props.ingredients)}
                        price={this.props.totalPrice}
                        ordered={this.purchaseHandler}
                    />
                </>
            );


            orderSummary = <OrderSummary ingredients={this.props.ingredients}
                                         purchaseCanceled={this.purchaseCancelHandler}
                                         purchaseContinued={this.purchaseContinueHandler}
                                         totalPrice={this.props.totalPrice}
            />;

        }

        if (this.state.isLoading) {
            orderSummary = <Spinner/>;
        }


        return (
            <>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>

                {burger}
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENTS, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENTS, ingredientName: ingName})
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosOrders));