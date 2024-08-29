// src/features/category/categorySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Category, CategoryState } from "features/product/types";
import { productService } from "features/product/service";

const initialState: CategoryState = {
    categories: [],
    initiated: false,
    loading: false,
    error: null,
};

const MAX_RETRIES = 3;

// Thunk to fetch categories
export const getCategories = createAsyncThunk(
    "product/getCategories",
    async (_, thunkAPI) => {
        let retries = 0;
        while (retries < MAX_RETRIES) {
            try {
                const categories = await productService.getCategories();
                return categories;
            } catch (error: any) {
                retries += 1;
                if (retries >= MAX_RETRIES) {
                    return thunkAPI.rejectWithValue(error.message);
                }
            }
        }
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.initiated = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload as Category[];
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default categorySlice.reducer;
