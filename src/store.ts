// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "components/Category/categorySlice";
import cartReducer from "components/Order/cartSlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
