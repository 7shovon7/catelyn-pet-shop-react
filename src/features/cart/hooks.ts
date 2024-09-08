// src/components/Order/hooks.ts
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "store";
import {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} from "./cartSlice";
import { CartItem } from "./types";

export const useCart = () => {
    const dispatch: AppDispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const addItemToCart = (item: CartItem) => {
        dispatch(addToCart(item));
    };

    const removeItemFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const increaseItemQuantity = (id: number) => {
        dispatch(increaseQuantity(id));
    };

    const decreaseItemQuantity = (id: number) => {
        dispatch(decreaseQuantity(id));
    };

    const clearCartItems = () => {
        dispatch(clearCart());
    };

    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );
    const totalAmount = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return {
        cartItems,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        clearCartItems,
        totalItems,
        totalAmount,
    };
};
