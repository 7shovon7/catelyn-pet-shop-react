// src/components/Header/Cart.tsx

import { Box, IconButton, Badge } from "@chakra-ui/react";
import { THEME_COLORS } from "misc/constants";
import { FaShoppingBasket } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import { useCart } from "features/cart/hooks";

const Cart = () => {
    const { totalItems } = useCart();

    return (
        <Box position="relative">
            <IconButton
                as={RouterLink}
                to="/checkout"
                color="white"
                bg={THEME_COLORS.primary}
                aria-label={"Cart"}
                borderRadius={2}
                _hover={{ color: THEME_COLORS.secondary, borderRadius: 2 }}
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
