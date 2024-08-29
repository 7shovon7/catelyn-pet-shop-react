import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./service";
import { AuthState, LoginCredentials, SignupFormData } from "./types";

const initialState: AuthState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
};

export const login = createAsyncThunk(
    "auth/login",
    async (credentials: LoginCredentials, thunkAPI) => {
        try {
            const user = await authService.login(credentials);
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const signup = createAsyncThunk(
    "auth/signup",
    async (signupData: SignupFormData, thunkAPI) => {
        try {
            const user = await authService.signup(signupData);
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchCurrentUser = createAsyncThunk(
    "auth/fetchCurrentUser",
    async (_, thunkAPI) => {
        try {
            const user = await authService.fetchCurrentUser();
            return user;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout(state) {
            state.user = null;
            state.isAuthenticated = false;
            authService.logout();
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
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchCurrentUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCurrentUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.user = action.payload;
            })
            .addCase(fetchCurrentUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
