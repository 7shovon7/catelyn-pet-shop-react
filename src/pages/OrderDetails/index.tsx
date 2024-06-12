// src/pages/OrderDetails/index.tsx

import React, { useEffect, useState } from "react";
import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import api from "features/order/api";
import { Order, OrderItem } from "features/order/api";

const OrderDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [order, setOrder] = useState<Order | null>(null);
    const token = localStorage.getItem("accessToken");

    useEffect(() => {
        const fetchOrder = async () => {
            if (id && token) {
                try {
                    const response = await api.getOrder(id, token);
                    setOrder(response.data);
                } catch (error) {
                    console.error("Error fetching order", error);
                }
            }
        };

        fetchOrder();
    }, [id]);

    if (!order) {
        return <Text>Loading...</Text>;
    }

    return (
        <Box padding={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Order Details
            </Text>
            <Text fontSize="lg" mb={8}>
                Order ID: {order.id}
            </Text>
            <VStack spacing={4} align="stretch">
                {order.items.map((item: OrderItem) => (
                    <HStack key={item.id} justifyContent="space-between">
                        <Image
                            src={item.product.image}
                            alt={item.product.title}
                            boxSize="50px"
                        />
                        <Text>{item.product.title}</Text>
                        <Text>{item.quantity}</Text>
                        <Text>৳{item.price}</Text>
                    </HStack>
                ))}
            </VStack>
            <Box mt={8}>
                <Text fontSize="lg" fontWeight="bold">
                    Total: ৳{order.total}
                </Text>
            </Box>
        </Box>
    );
};

export default OrderDetails;
