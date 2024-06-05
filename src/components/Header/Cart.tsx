import { IconButton } from "@chakra-ui/react";
import { THEME_COLORS } from "misc/constants";
import { FaShoppingBasket } from "react-icons/fa";

const Cart = () => {
    return (
        <IconButton
            color="white"
            bg={THEME_COLORS.primary}
            aria-label={"Cart"}
            borderRadius={2}
            _hover={{ bg: THEME_COLORS.secondary, borderRadius: 2 }}
            icon={<FaShoppingBasket size={36} />}
        />
    );
};

export default Cart;
