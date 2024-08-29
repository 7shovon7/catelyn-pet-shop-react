import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { getCategories } from "../slices/category";

export const useCategories = () => {
    const dispatch: AppDispatch = useDispatch();

    const { initiated, categories, loading, error } = useSelector(
        (state: RootState) => state.category
    );

    const fetchCategories = () => {
        dispatch(getCategories());
    };

    return { initiated, categories, loading, error, fetchCategories };
};
