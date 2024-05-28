import { IconButton } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";

const Cart = () => {
    return (
        <IconButton
            color="white"
            bg="#17383E"
            aria-label={"Cart"}
            borderRadius={2}
            _hover={{ bg: "coral", borderRadius: 2 }}
            icon={<FaShoppingBasket size={36} />}
        />
    );
};

export default Cart;
