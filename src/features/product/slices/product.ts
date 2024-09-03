import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductParameters, ProductState } from "../types";
import { productService } from "../service";
import { RootState } from "store";

const initialState: ProductState = {
    productsByCategory: {},
    totalCountByCategory: {},
    loading: false,
    error: null,
};

export const getProducts = createAsyncThunk(
    "products/fetchProducts",
    async (params: ProductParameters, { getState, rejectWithValue }) => {
        const { limit = 10, offset = 0, categories = "all" } = params;
        const categoryKey = categories;

        const state = getState() as RootState;
        const existingProducts =
            state.product.productsByCategory[categoryKey] || [];

        if (existingProducts.length >= limit + offset) {
            // Already enough data in state
            return;
        }

        try {
            const productResp = await productService.getProducts(params);
            return {
                products: productResp.results,
                count: productResp.count,
                categoryKey,
            };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                if (action.payload) {
                    const { products, count, categoryKey } = action.payload;
                    if (!state.productsByCategory[categoryKey]) {
                        state.productsByCategory[categoryKey] = [];
                    }
                    const existingProductsSet = new Set(
                        state.productsByCategory[categoryKey].map((p) => p.id)
                    );
                    const newProducts = products.filter(
                        (product) => !existingProductsSet.has(product.id)
                    );
                    state.productsByCategory[categoryKey] = [
                        ...state.productsByCategory[categoryKey],
                        ...newProducts,
                    ];
                    state.totalCountByCategory[categoryKey] = count;
                }
                state.loading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default productSlice.reducer;
