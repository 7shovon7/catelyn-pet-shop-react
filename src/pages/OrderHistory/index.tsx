// src/pages/OrderHistory/index.tsx

import React, { useEffect, useState } from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import api from "features/order/api";
import { Order } from "features/order/types";

const OrderHistory: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        const fetchOrders = async () => {
            if (token) {
                try {
                    const response = await api.getOrders(token);
                    setOrders(response.data);
                } catch (error) {
                    console.error("Error fetching orders", error);
                }
            }
        };

        fetchOrders();
    }, []);

    return (
        <Box padding={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Order History
            </Text>
            <Table variant="simple">
                <Thead>
                    <Tr>
                        <Th>Order ID</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                        <Th>Total</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {orders.map((order) => (
                        <Tr key={order.id}>
                            <Td>{order.id}</Td>
                            <Td>
                                {new Date(
                                    order.created_at
                                ).toLocaleDateString()}
                            </Td>
                            <Td>{order.status}</Td>
                            <Td>৳{order.total_price}</Td>
                            <Td>
                                <Button as={Link} to={`/orders/${order.id}`}>
                                    View Details
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default OrderHistory;
