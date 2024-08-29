export interface UserResponse {
    id: number;
    email: string;
    full_name: string;
}

export interface LoginResponse {
    access: string;
    refresh: string;
    user: UserResponse;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupFormData {
    email: string;
    password: string;
    full_name: string;
    user_role: string;
}

export interface SignupResponse {
    access: string;
    refresh: string;
    user: UserResponse;
}

export interface AuthState {
    user: null | UserResponse;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}
