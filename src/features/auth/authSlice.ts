import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { getCompleteUrl } from "utils/misc";

interface User {
    id: number;
    email: string;
    full_name: string;
    user_role: string;
}

interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    accessToken: null,
    refreshToken: null,
    loading: false,
    error: null,
};

// Helper function to load tokens from localStorage
const loadTokens = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return { accessToken, refreshToken };
};

// Initial state with loaded tokens
const tokens = loadTokens();
const initialStateWithTokens: AuthState = {
    ...initialState,
    accessToken: tokens.accessToken,
    refreshToken: tokens.refreshToken,
};

export const login = createAsyncThunk(
    "auth/login",
    async (credentials: { email: string; password: string }) => {
        const response = await axios.post(
            getCompleteUrl("/auth/jwt/create/"),
            credentials
        );
        return response.data;
    }
);

export const signup = createAsyncThunk(
    "auth/signup",
    async (userDetails: {
        email: string;
        full_name: string;
        user_role: string;
        password: string;
    }) => {
        const response = await axios.post(
            getCompleteUrl("/auth/users/"),
            userDetails
        );
        return response.data;
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: initialStateWithTokens,
    reducers: {
        logout(state) {
            state.user = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.error = null;
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
        },
        setUser(state, action: PayloadAction<User>) {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.accessToken = action.payload.access;
                state.refreshToken = action.payload.refresh;
                localStorage.setItem("accessToken", action.payload.access);
                localStorage.setItem("refreshToken", action.payload.refresh);
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to login";
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                // Automatically log in the user after signup
                state.user = action.payload;
                state.accessToken = null;
                state.refreshToken = null;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to sign up";
            });
    },
});

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
