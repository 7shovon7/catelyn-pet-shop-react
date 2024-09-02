import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductParameters, ProductState } from "../types";
import { productService } from "../service";
import { generateProductKey } from "utils/misc";
import { RootState } from "store";

const initialState: ProductState = {
    products: {},
    totalCount: {},
    loading: false,
    error: null,
};

export const getProducts = createAsyncThunk(
    "products/fetchProducts",
    // async (productParams: ProductParameters = {}, thunkAPI) => {
    //     try {
    //         const productResp = await productService.getProducts(productParams);
    //         return productResp;
    //     } catch (error: any) {
    //         return thunkAPI.rejectWithValue(error.message);
    //     }
    // }
    async (params: ProductParameters, { getState, rejectWithValue }) => {
        const { limit, offset, categories } = params;
        const key = generateProductKey(limit!, offset!, categories);

        const state = getState() as RootState;
        const cachedProducts = state.product.products[key];

        if (cachedProducts) {
            return { products: cachedProducts, key };
        }

        try {
            const productResp = await productService.getProducts(params);
            return {
                products: productResp.results,
                count: productResp.count,
                key,
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
                const { products, count, key } = action.payload;
                state.products[key] = [
                    ...(state.products[key] || []),
                    ...products,
                ];
                state.totalCount[key] = count as number;
                state.loading = false;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default productSlice.reducer;
