import { IconButton } from "@chakra-ui/react";
import { FaShoppingBasket } from "react-icons/fa";

const Cart = () => {
    return <IconButton aria-label={"Cart"} icon={<FaShoppingBasket />} />;
};

export default Cart;
