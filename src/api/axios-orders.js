import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://burgerking-backend.firebaseio.com/',
});


export default axiosOrders;
