import { useDispatch, useSelector } from "react-redux";
import { login, logout, signup } from "./slice";
import { AppDispatch, RootState } from "store";
import { SignupFormData } from "./types";

export const useAuth = () => {
    const dispatch: AppDispatch = useDispatch();
    const { user, isAuthenticated, loading, error } = useSelector(
        (state: RootState) => state.auth
    );

    const signupUser = (signupData: SignupFormData) => {
        dispatch(signup(signupData));
    };

    const loginUser = (email: string, password: string) => {
        dispatch(login({ email, password }));
    };

    const logoutUser = () => {
        dispatch(logout());
    };

    return {
        user,
        isAuthenticated,
        loading,
        error,
        signupUser,
        loginUser,
        logoutUser,
    };
};
