// src/features/category/categorySlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getCompleteUrl } from "utils/misc";
import { Category, CategoryState } from "features/product/types";

// Thunk to fetch categories
export const fetchCategories = createAsyncThunk(
    "category/fetchCategories",
    async () => {
        const response = await axios.get(
            getCompleteUrl("/shop_settings/categories/")
        );
        return response.data as Category[];
    }
);

const initialState: CategoryState = {
    categories: [],
    status: "idle",
    error: null,
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "loading";
            })
            .addCase(
                fetchCategories.fulfilled,
                (state, action: PayloadAction<Category[]>) => {
                    state.status = "succeeded";
                    state.categories = action.payload;
                }
            )
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = "failed";
                state.error =
                    action.error.message ?? "Failed to load categories";
            });
    },
});

export default categorySlice.reducer;
