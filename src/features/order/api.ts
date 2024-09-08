import axios from "axios";
import { getCompleteUrl } from "utils/misc";
import { OrderItemInput } from "./types";

const API_URL = getCompleteUrl("/orders/list/");

const createOrder = (orderData: { items: OrderItemInput[] }, token: string) => {
    return axios.post(
        API_URL,
        { items: orderData.items },
        {
            headers: { Authorization: `JWT ${token}` },
        }
    );
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
