import { getCurrentUserApi, loginApi, signupApi } from "./api";
import {
    LoginCredentials,
    LoginResponse,
    SignupFormData,
    SignupResponse,
} from "./types";

const authService = {
    async login(credentials: LoginCredentials) {
        try {
            const data: LoginResponse = await loginApi(credentials);

            // Store tokens in localStorage
            this.setAccessToken(data.access);
            this.setRefreshToken(data.refresh);

            return data.user;
        } catch (error) {
            throw new Error("Invalid credentials");
        }
    },

    async signup(signupData: SignupFormData) {
        try {
            const data: SignupResponse = await signupApi(signupData);

            // Store tokens in localStorage
            this.setAccessToken(data.access);
            this.setRefreshToken(data.refresh);

            return data.user;
        } catch (error) {
            throw new Error("Failed to sign up! Please try again later.");
        }
    },

    async fetchCurrentUser() {
        const accessToken = this.getAccessToken();
        if (!accessToken) throw new Error("No access token found");

        try {
            const user = await getCurrentUserApi(accessToken);
            return user;
        } catch (error) {
            throw new Error("Failed to get valid user");
        }
    },

    logout() {
        // Clear tokens on logout
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    },

    getAccessToken() {
        return localStorage.getItem("accessToken");
    },

    setAccessToken(accessToken: string) {
        localStorage.setItem("accessToken", accessToken);
    },

    getRefreshToken() {
        return localStorage.getItem("refreshToken");
    },

    setRefreshToken(refreshToken: string) {
        localStorage.setItem("refreshToken", refreshToken);
    },
};

export default authService;
