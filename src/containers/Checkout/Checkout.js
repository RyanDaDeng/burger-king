import React, {Component} from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import {Route} from 'react-router-dom';
import ContactData from "./ContactData/ContactData";
import {connect} from "react-redux";

class Checkout extends Component {

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    };

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    };

    render() {
        return (
            <div>
                <CheckoutSummary onCheckoutCancelled={this.checkoutCancelledHandler}
                                 onCheckoutContinued={this.checkoutContinuedHandler}
                                 ingredients={this.props.ingredients}>
                </CheckoutSummary>
                <Route path={this.props.match.path + '/contact-data'}
                       component={ContactData}/>
            </div>

        //     <Route path={this.props.match.path + '/contact-data'}
        // render={() => (
        //     <ContactData ingredients={this.props.ingredients} totalPrice={this.props.totalPrice}/>)}/>
        )
    }
}

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};

export default connect(mapStateToProps)(Checkout);