// src/pages/Checkout/index.tsx

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "store";
import {
    Box,
    Flex,
    HStack,
    Image,
    Text,
    VStack,
    Button,
} from "@chakra-ui/react";
import CButton from "components/Regular/CButton";
import {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
} from "components/Order/cartSlice";

const Checkout: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const dispatch = useDispatch<AppDispatch>();

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
                                                    dispatch(
                                                        decreaseQuantity(
                                                            item.id
                                                        )
                                                    )
                                                }
                                            >
                                                -
                                            </Button>
                                            <Text>{item.quantity}</Text>
                                            <Button
                                                size="xs"
                                                onClick={() =>
                                                    dispatch(
                                                        increaseQuantity(
                                                            item.id
                                                        )
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
                                                dispatch(
                                                    removeFromCart(item.id)
                                                )
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
                    <CButton>Proceed to Confirm Order</CButton>
                </>
            )}
        </Box>
    );
};

export default Checkout;
