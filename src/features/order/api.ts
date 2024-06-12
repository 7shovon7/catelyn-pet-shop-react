import axios from "axios";
import { getCompleteUrl } from "utils/misc";

const API_URL = getCompleteUrl("/order/orders/");

export interface OrderItem {
    id: number;
    product: any; // Adjust according to your Product type
    quantity: number;
    price: number;
}

export interface OrderItemInput {
    product: number;
    quantity: number;
    price: number;
}

export interface Order {
    id: number;
    user: any; // Adjust according to your User type
    created_at: string;
    updated_at: string;
    status: string;
    total: number;
    items: OrderItem[];
}

const createOrder = (orderData: { items: OrderItemInput[] }, token: string) => {
    return axios.post(API_URL, orderData, {
        headers: { Authorization: `JWT ${token}` },
    });
};

const getOrders = (token: string) => {
    return axios.get(API_URL, {
        headers: { Authorization: `JWT ${token}` },
    });
};

const getOrder = (id: string, token: string) => {
    return axios.get(`${API_URL}${id}/`, {
        headers: { Authorization: `JWT ${token}` },
    });
};

export default {
    createOrder,
    getOrders,
    getOrder,
};
