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
    clearCart,
} from "components/Order/cartSlice";
import { useNavigate } from "react-router-dom";
import api, { OrderItemInput } from "features/order/api";

const Checkout: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const token = localStorage.getItem("accessToken");

    const handleCheckout = async () => {
        const orderData = {
            items: cartItems.map(
                (item): OrderItemInput => ({
                    product: item.id,
                    quantity: item.quantity,
                    price: item.price,
                })
            ),
        };

        if (token) {
            try {
                const response = await api.createOrder(orderData, token);
                const orderId = response.data.id;
                dispatch(clearCart());
                navigate(`/thank-you?order_id=${orderId}`);
            } catch (error) {
                console.error("Error creating order", error);
            }
        } else {
            console.error("No access token found");
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
                    <CButton onClick={handleCheckout}>
                        Proceed to Confirm Order
                    </CButton>
                </>
            )}
        </Box>
    );
};

export default Checkout;
