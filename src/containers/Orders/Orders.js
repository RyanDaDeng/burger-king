import React, {Component} from 'react';
import axiosOrders from "../../api/axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {

    state = {
        orders: [],
        isLoading: false,
        error: false
    };

    componentDidMount() {
        this.setState({isLoading: true});
        axiosOrders.get('https://burgerking-backend.firebaseio.com/orders.json')
            .then(
                response => {
                    this.setState({orders: response.data, isLoading: false})
                })
            .catch(err => {
                this.setState({isLoading: false, error: true})
            })
    }

    render() {

        let orders = [];


        if (this.state.error) {
            orders = <p>Orders cannot be retrieved!</p>
        }
        if (!this.state.isLoading) {
            for (let [key, order]  of Object.entries(this.state.orders)) {
                orders.push(
                    <Order key={key} ingredients={order['ingredients']} price={order['price']} customer={order['customer']}></Order>
                )
            }
        } else {
            orders = <Spinner/>;
        }
        return (
            <>
                {orders}
            </>
        );
    }
}

export default withErrorHandler(Orders,axiosOrders);