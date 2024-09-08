// src/pages/ThankYou/index.tsx

import React, { useEffect, useState } from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import api from "features/order/api";
import { Order, OrderItem } from "features/order/types";

const ThankYou: React.FC = () => {
    const location = useLocation();
    const [order, setOrder] = useState<Order | null>(null);
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        const fetchOrder = async () => {
            const orderId = new URLSearchParams(location.search).get(
                "order_id"
            );
            if (orderId && token) {
                try {
                    const response = await api.getOrder(orderId, token);
                    setOrder(response.data);
                } catch (error) {
                    console.error("Error fetching order", error);
                }
            }
        };

        fetchOrder();
    }, [location, token]);

    if (!order) {
        return <Text>Loading...</Text>;
    }

    return (
        <Box padding={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Thank You for Your Order!
            </Text>
            <Text fontSize="lg" mb={8}>
                Order ID: {order.id}
            </Text>
            <VStack spacing={4} align="stretch">
                {order.items.map((item: OrderItem) => (
                    <HStack key={item.id} justifyContent="space-between">
                        <Text>{item.title}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>৳{item.selling_price_per_unit}</Text>
                    </HStack>
                ))}
            </VStack>
            <Box mt={8}>
                <Text fontSize="lg" fontWeight="bold">
                    Total: ৳{order.total_price}
                </Text>
            </Box>
        </Box>
    );
};

export default ThankYou;
