import React, {Component} from 'react';

import Button from '../../../components/UI/Button/Button';
import styles from './ContactData.module.css';
import axiosOrders from "../../../api/axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import {withRouter} from 'react-router-dom';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: ''
        },
        isLoading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({isLoading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Ryan',
                address: {
                    street: 'Test',
                    country: 'China'
                },
                email: 'test@test.com'
            },
            notes: 'please quick'
        };

        axiosOrders.post('/orders.json', order)
            .then(response => {
                console.log(response);
                this.setState({isLoading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error);
                this.setState({isLoading: false});
            });
    };

    render() {

        let form = (
            <form>
                <input className={styles.Input} type="text" name="name" placeholder="Your name"/>
                <input className={styles.Input} type="email" name="email" placeholder="Your email"/>
                <input className={styles.Input} type="text" name="street" placeholder="Your street"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.isLoading) {
            form = <Spinner/>
        }
        return (
            <div className={styles.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>

        )
    }
}

export default withRouter(ContactData);