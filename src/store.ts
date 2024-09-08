import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/slice";
import categoryReducer from "features/product/slices/category";
import productReducer from "features/product/slices/product";
import blogReducer from "features/blog/slice";
import cartReducer from "components/Order/cartSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        product: productReducer,
        blog: blogReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
