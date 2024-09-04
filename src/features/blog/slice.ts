import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BlogAPIParameters, BlogState } from "./types";
import { RootState } from "store";
import { blogService } from "./service";

export const getBlogs = createAsyncThunk(
    "blogs/fetchBlogs",
    async (params: BlogAPIParameters, { getState, rejectWithValue }) => {
        const { limit = 10, offset = 0 } = params;

        const state = getState() as RootState;
        const existingBlogs = state.blog.blogs || [];

        if (existingBlogs.length >= limit + offset) return;

        try {
            const blogResponse = await blogService.getBlogs(params);
            return {
                blogs: blogResponse.results,
                count: blogResponse.count,
            };
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState: BlogState = {
    blogs: [],
    totalCount: 0,
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBlogs.pending, (state) => {
                state.loading = true;
            })
            .addCase(getBlogs.fulfilled, (state, action) => {
                if (action.payload) {
                    const { blogs, count } = action.payload;
                    const existingBlogsSet = new Set(
                        state.blogs.map((blog) => blog.id)
                    );
                    const newBlogs = blogs.filter(
                        (blog) => !existingBlogsSet.has(blog.id)
                    );
                    state.blogs = [...state.blogs, ...newBlogs];
                    state.totalCount = count;
                }
                state.loading = false;
            })
            .addCase(getBlogs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default blogSlice.reducer;
