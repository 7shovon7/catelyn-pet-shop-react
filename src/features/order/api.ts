import axios from "axios";
import { getCompleteUrl } from "utils/misc";

const API_URL = getCompleteUrl("/order/orders/");

export interface OrderItem {
    product: number;
    quantity: number;
    price: number;
}

export interface Order {
    items: OrderItem[];
}

const createOrder = (orderData: Order, token: string) => {
    return axios.post(API_URL, orderData, {
        headers: { Authorization: `JWT ${token}` },
    });
};

const getOrders = (token: string) => {
    return axios.get(API_URL, {
        headers: { Authorization: `JWT ${token}` },
    });
};

export default {
    createOrder,
    getOrders,
};
