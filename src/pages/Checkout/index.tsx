import React, { useState } from "react";
import {
    Box,
    Flex,
    HStack,
    Image,
    Text,
    VStack,
    Button,
    useToast,
} from "@chakra-ui/react";
import CButton from "components/Regular/CButton";
import { useCart } from "features/cart/hooks";
import { useNavigate } from "react-router-dom";
import api from "features/order/api";
import { OrderItemInput } from "features/order/types";

const Checkout: React.FC = () => {
    const {
        cartItems,
        totalAmount,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        clearCartItems,
    } = useCart();
    const navigate = useNavigate();
    const toast = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const handleCheckout = async () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            toast({
                title: "Error",
                description: "You must be logged in to place an order.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setIsLoading(true);
        const orderData = {
            items: cartItems.map(
                (item): OrderItemInput => ({
                    product: item.id,
                    quantity: item.quantity,
                })
            ),
        };

        try {
            const response = await api.createOrder(orderData, token);
            const orderId = response.data.id;
            clearCartItems();
            navigate(`/thank-you?order_id=${orderId}`);
            toast({
                title: "Order placed successfully",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error creating order", error);
            toast({
                title: "Error",
                description: "Failed to place the order. Please try again.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Box padding={8}>
            <Text fontSize="2xl" fontWeight="bold" mb={4}>
                Checkout
            </Text>
            {cartItems.length === 0 ? (
                <Text>Your cart is empty.</Text>
            ) : (
                <>
                    <VStack spacing={4} align="stretch" mb={8}>
                        {cartItems.map((item) => (
                            <Flex
                                key={item.id}
                                justifyContent="space-between"
                                borderWidth="1px"
                                borderRadius="lg"
                                p={4}
                            >
                                <HStack>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        boxSize="50px"
                                    />
                                    <VStack align="start">
                                        <Text fontWeight="bold">
                                            {item.title}
                                        </Text>
                                        <HStack>
                                            <Button
                                                size="xs"
                                                onClick={() =>
                                                    decreaseItemQuantity(
                                                        item.id
                                                    )
                                                }
                                            >
                                                -
                                            </Button>
                                            <Text>{item.quantity}</Text>
                                            <Button
                                                size="xs"
                                                onClick={() =>
                                                    increaseItemQuantity(
                                                        item.id
                                                    )
                                                }
                                            >
                                                +
                                            </Button>
                                        </HStack>
                                        <Button
                                            size="xs"
                                            colorScheme="red"
                                            onClick={() =>
                                                removeItemFromCart(item.id)
                                            }
                                        >
                                            Remove
                                        </Button>
                                    </VStack>
                                </HStack>
                                <Text>
                                    ৳{(item.price * item.quantity).toFixed(2)}
                                </Text>
                            </Flex>
                        ))}
                    </VStack>
                    <Flex
                        justifyContent="space-between"
                        borderWidth="1px"
                        borderRadius="lg"
                        p={4}
                        mb={8}
                    >
                        <Text fontSize="lg" fontWeight="bold">
                            Total
                        </Text>
                        <Text fontSize="lg" fontWeight="bold">
                            ৳{totalAmount.toFixed(2)}
                        </Text>
                    </Flex>
                    <CButton
                        onClick={handleCheckout}
                        disabled={isLoading || cartItems.length === 0}
                    >
                        {isLoading
                            ? "Processing..."
                            : "Proceed to Confirm Order"}
                    </CButton>
                </>
            )}
        </Box>
    );
};

export default Checkout;
