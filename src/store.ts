// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/slice";
import categoryReducer from "features/product/slices/category";
// import categoryReducer from "components/Category/categorySlice";
// import cartReducer from "components/Order/cartSlice";
// import { loadState, saveState } from "utils/localStorage";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
