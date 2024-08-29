import axios from "axios";
import { getCompleteUrl } from "utils/misc";
import {
    LoginCredentials,
    LoginResponse,
    UserResponse,
    SignupFormData,
    SignupResponse,
} from "./types";

export const loginApi = async (credentials: LoginCredentials) => {
    const response = await axios.post<LoginResponse>(
        getCompleteUrl("/auth/jwt/create/"),
        credentials
    );
    return response.data;
};

export const getCurrentUserApi = async (accessToken: string) => {
    const response = await axios.get<UserResponse>(
        getCompleteUrl("/auth/users/me/"),
        {
            headers: { Authorization: `JWT ${accessToken}` },
        }
    );
    return response.data;
};

export const signupApi = async (signupData: SignupFormData) => {
    const response = await axios.post<SignupResponse>(
        getCompleteUrl("/users/register/"),
        signupData
    );
    return response.data;
};
