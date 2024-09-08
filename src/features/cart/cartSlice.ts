import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./types";

const loadState = (): CartState => {
    try {
        const serializedState = localStorage.getItem("cart");
        if (serializedState === null) {
            return { items: [] };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.error("Could not load state", err);
        return { items: [] };
    }
};

const saveState = (state: CartState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("cart", serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const item = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            saveState(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
            saveState(state);
        },
        increaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
            saveState(state);
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
            saveState(state);
        },
        clearCart: (state) => {
            state.items = [];
            saveState(state);
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
