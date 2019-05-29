import React, {Component} from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    // This could be a functional component, doesn't have to be a class
    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('[order summary]check')
    }

    render() {
        const {totalPrice, purchaseCanceled, purchaseContinued, ingredients } = this.props;

        return (
            <>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {Object.keys(ingredients).map(igKey => (
                        <li key={igKey}>
                            <span style={{textTransform: 'capitablize'}}>{igKey}:{ingredients[igKey]}</span>
                        </li>
                    ))}
                </ul>
                <p><strong>Total Price: {totalPrice.toFixed(2)} </strong></p>
                <p>Continue to Checkout?</p>
                <Button clicked={purchaseCanceled} btnType={'Danger'}>CANCEL</Button>
                <Button clicked={purchaseContinued} btnType={'Success'}>CONTINUE</Button>
            </>
        );
    }
}


export default OrderSummary;