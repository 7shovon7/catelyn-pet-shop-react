// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "components/Category/categorySlice";
import cartReducer from "components/Order/cartSlice";
import { loadState, saveState } from "utils/localStorage";

const preloadedState = {
    cart: loadState(),
};

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        cart: cartReducer,
    },
    preloadedState,
});

store.subscribe(() => {
    saveState(store.getState().cart);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
