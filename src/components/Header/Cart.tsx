// src/components/Header/Cart.tsx

import { Badge, Box, IconButton } from "@chakra-ui/react";
import { THEME_COLORS } from "misc/constants";
import { FaShoppingBasket } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "store";

const Cart = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <Box position="relative">
            <IconButton
                color="white"
                bg={THEME_COLORS.primary}
                aria-label={"Cart"}
                borderRadius={2}
                _hover={{ bg: THEME_COLORS.secondary, borderRadius: 2 }}
                icon={<FaShoppingBasket size={36} />}
            />
            {totalItems > 0 && (
                <Badge
                    position="absolute"
                    top="-1"
                    right="-1"
                    bg="red.500"
                    borderRadius="full"
                    width="20px"
                    height="20px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontSize="0.8em"
                >
                    {totalItems}
                </Badge>
            )}
        </Box>
    );
};

export default Cart;
