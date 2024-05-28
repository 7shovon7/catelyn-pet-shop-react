import { IconButton } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";

const Cart = () => {
    return (
        <IconButton
            color="white"
            bg="transparent"
            aria-label={"Cart"}
            icon={<FaShoppingBasket size={40} />}
        />
    );
};

export default Cart;
